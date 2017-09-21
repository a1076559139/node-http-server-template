const type = require('type-util');
const request = require('request');

// {
//     session_key: "Il/mRewg0o1Ekc3uv4EeZw==",
//     expires_in: 7200,
//     openid: "oSfQI0SO0dOQb7jTAzKCPydYopZ0",
//     unionid: "ow8zhjnN69s8PTCeT7jBy4yTvv3g"
// }
module.exports = async function getWxDataByJsCode(js_code) {
    if (!type.String.isString(js_code)) {
        console.error(`${__filename} ${arguments.callee.name} ${JSON.stringify(arguments)} error query`);
        return Promise.reject('参数错误');
    }
    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + config.wx.appid + '&secret=' + config.wx.secret + '&js_code=' + js_code + '&grant_type=' + config.wx.grant_type;
    let result = await awaitDoErr(request, request.get, url);
    let data = result[1];
    try {
        data = JSON.parse(data);
    } catch (e) {

    }
    if (!data || type.isExist(data.errcode)) {
        console.error(`${__filename} ${arguments.callee.name} ${JSON.stringify(arguments)} error data ${JSON.stringify(data)}`);
        return Promise.reject('解析失败');
    }

    data.expires_time = Date.now() + (data.expires_in - 200) * 1000;
    return data;
};