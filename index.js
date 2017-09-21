require('babel-polyfill');

global.config = require('./config');
global.type = require('./util/type');
global.util = require('./util/util');

const fs = require('fs');
const route = require('./route.js');
const http = require('http');
const server = http.createServer();

//监听请求
server.on('request', function (req, res) {
    let data = '';

    req.on('data', function (chunk) {
        data += chunk;
    });
    req.on('end', function () {
        route(req, res, data);
    });
});

server.listen(config.host.port, config.host.ip, function () {
    console.log('listen localhost:' + server.address().port);
});

//libs库设为全局
global.libs = {};
const files_libs = fs.readdirSync('./libs');
for (let i = 0; i < files_libs.length; i++) {
    let file = files_libs[i];
    if (libs[file]) {
        throw file + 'is already exists';
    }
    libs[file] = require('./libs/' + file);
}

//扩展库
global.util = require('./libs/util');

//cmds库设为全局
// global.cmds = {};
// const dirs_cmds = fs.readdirSync('./cmds');
// for (let i = 0; i < dirs_cmds.length; i++) {
//     let dir = dirs_cmds[i];
//     if (cmds[dir]) {
//         throw dir + ' is already exists';
//     }
//     cmds[dir] = {};

//     let files_cmds = fs.readdirSync('./cmds/' + dir);
//     for (let i = 0; i < files_cmds.length; i++) {
//         let file = files_cmds[i];
//         if (file.endsWith('.js')) {
//             file = file.slice(0, file.length - 3);
//             if (cmds[dir][file]) {
//                 throw file + ' is already exists';
//             }
//             cmds[dir][file] = require('./cmds/' + dir + '/' + file);
//         }
//     }
// }

// global.awaitDoErr = function (target, func, ...arg) {
//     return new Promise(function (resolve, reject) {
//         func.call(target, ...arg, function (err, ...parma) {
//             if (err) {
//                 reject({
//                     errCode: 400,
//                     errMsg: err
//                 });
//             } else {
//                 resolve(parma.length === 1 ? parma[0] : parma);
//             }
//         });
//     });
// };

// global.awaitDo = function (target, func, ...arg) {
//     return new Promise(function (resolve) {
//         func.call(target, ...arg, function (...parma) {
//             resolve(parma.length === 1 ? parma[0] : parma);
//         });
//     });
// };

// global.sleep = function (time) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve();
//         }, time);
//     });
// };
/**
 * 将普通方法转成ES7方法
 *
 * @param {string} filename
 * @param {object} target
 * @param {string} func
 * @param {any} arg
 * @returns
 */
global.awaitDoErr = function (filename, target, funcName, ...arg) {
    return new Promise(function (resolve, reject) {
        logSuccess(filename, funcName, arg);
        target[funcName](...arg, function (err, ...parma) {
            if (err) {
                logError(filename, funcName, err);
                reject({
                    code: 400,
                    message: err
                });
            } else {
                logSuccess(filename, funcName, parma);
                resolve(parma.length === 1 ? parma[0] : parma);
            }
        });
    });
};

/**
 * 将普通方法转成ES7方法
 *
 * @param {string} filename
 * @param {object} target
 * @param {string} func
 * @param {any} arg
 * @returns
 */
global.awaitDo = function (filename, target, funcName, ...arg) {
    return new Promise(function (resolve) {
        logSuccess(filename, funcName, arg);
        target[funcName](...arg, function (...parma) {
            logSuccess(filename, funcName, parma);
            resolve(parma.length === 1 ? parma[0] : parma);
        });
    });
};

global.sleep = function (time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, time);
    });
};

global.logError = function (filename, funName, msg) {
    console.error('[ERROR] [' + filename + '] [' + funName + '] ' + JSON.stringify(msg));
    console.log('[ERROR] [' + filename + '] [' + funName + '] ' + JSON.stringify(msg));
};

global.logSuccess = function (filename, funName, msg) {
    console.log('[OK] [' + filename + '] [' + funName + '] ' + JSON.stringify(msg));
};

process.on('uncaughtException', function (err) {
    console.error(err.stack);
});

