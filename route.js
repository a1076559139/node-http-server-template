/**********************************************************
路由模块
**********************************************************/
const url = require('url');
const querystring = require('querystring');
const type = require('type-util');
const util = require('util');
/**
 * 对resquest进行封装
 * 
 * @param {*} res 
 */
const packingRes = function (res) {
	let end = res.end;
	res.end = function (data, encoding, callback) {
		res.writeHead(200,
			{
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'text/plain; charset=UTF-8'
			}
		);

		if ((typeof data !== 'undefined') && !(data instanceof Buffer) && (typeof data !== 'function')) {
			if (typeof data === 'object') {
				data = JSON.stringify(data);
			} else if (typeof data === 'number') {
				data = data.toString();
			}
		}

		end.call(res, data, encoding, callback);
	};

	// res.send = function (data, type) {
	// 	res.writeHead(200,
	// 		{
	// 			'Access-Control-Allow-Origin': '*',
	// 			'Content-Type': 'text/' + (type || 'plain') + '; charset=UTF-8'
	// 		}
	// 	);
	// 	res.end(data);
	// };

	return res;
};

module.exports = async function (req, res, data) {
	packingRes(res);

	let params = getParams(req, data);
	let pathname = params.pathname;
	req.query = params.query;

	if (pathname.endsWith('/')) {
		pathname = pathname.slice(0, pathname.length - 1);
	}

	res.send = function (data) {
		res.end({
			status: 200,
			data: data
		});
	};

	res.error = function (errCode, errMsg) {
		res.end({
			status: errCode,
			data: {
				pathname: '/cmds' + pathname,
				query: params.query,
				errMsg: errMsg
			}
		});
	};

	// 判断指令是否正确
	try {
		console.log(util.format('[RQ] [%s] %s', pathname, JSON.stringify(req.query)));
		let user = true;
		let other = true;
		if (req.query.user_id) {
			user = await libs.db.db_wx_user_info.isExistUserInfo(req.query.user_id);
		}

		if (req.query.other_id) {
			other = await libs.db.db_wx_user_info.isExistUserInfo(req.query.other_id);
		}

		let result;
		if (user && other) {
			let cmd = require('./cmds' + pathname);
			result = await cmd(req, res);
			if (type.isNotExist(result)) {
				result = {
					code: 100,
					data: '无返回值'
				};
			}
			if (type.isNotExist(result.code)) {
				result = {
					code: 200,
					data: result
				};
			}
		} else {
			result = {
				code: 100,
				data: (user ? '' : 'USERID不存在') + (other ? '' : 'OTHERID不存在')
			};
		}
		console.log(util.format('[RS] [%s] [%s] %s %s', pathname, '200', JSON.stringify(req.query), JSON.stringify(result)));
		res.send(result);
	} catch (err) {
		let errCode = 100;
		let errMsg = err;
		if (!type.judge(err, { errCode: type.TYPE.NUMBER }) && err.errCode === 400) {
			errCode = err.errCode;
			errMsg = err.errMsg;
		}
		console.log(util.format('[RS] [%s] [%s] %s %s', pathname, errCode, JSON.stringify(req.query), ((err instanceof Error) && errMsg.stack.replace(/\n\s*/g, ' | ')) || JSON.stringify(errMsg)));
		res.error(errCode, ((err instanceof Error) && errMsg.message) || errMsg);
	}
};

//解析参数
function getParams(req, data) {
	let method = req.method.toLowerCase();
	let Url = url.parse(req.url, true);
	if (method === 'get') {
		return {
			query: Url.query || {},
			pathname: Url.pathname
		};
	} else {
		return {
			query: querystring.parse(data) || {},
			pathname: Url.pathname
		};
	}
}