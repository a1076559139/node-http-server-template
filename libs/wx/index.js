const fs = require('fs');

const decode = {};

const files_cmds = fs.readdirSync('./libs/wx/cmds');
for (let i = 0; i < files_cmds.length; i++) {
    let file = files_cmds[i];
    if (file.endsWith('.js')) {
        file = file.slice(0, file.length - 3);
        if (decode[file]) {
            throw file + ' is already exists';
        }
        decode[file] = require('./cmds/' + file);
    }
}

module.exports = decode;