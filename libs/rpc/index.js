/**
 * 派派 ES 接入协议
 *
 * @author 张鹏
 * @date 2017-5-5
 */

//初始化es
const path = require('path');
const protopath = path.join(__dirname, '/protocol');
const jpacks = require('jpacks');
require('jpacks/schemas-extend/bigint')(jpacks);
require('jpacks/schemas-extend/zlib')(jpacks);
require('jpacks/schemas-extend/protobuf')(jpacks);
require('./libs/es-schema')(jpacks, protopath);

const rpc = {};



module.exports = rpc;