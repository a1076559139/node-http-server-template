const type = require('type-util');
const WXBizDataCrypt = require('../libs/WXBizDataCrypt');
const appid = config.wx.appid;
module.exports = async function decodeData(sessionKey, iv, encryptedData) {
    try {
        let pc = new WXBizDataCrypt(appid, sessionKey);

        let data = pc.decryptData(encryptedData, iv);

        if (data && typeof data.errCode === 'undefined') {
            // console.log(`${__filename} decodeData  ${JSON.stringify(arguments)} data ${JSON.stringify(data)}`);
            console.log(util.format('wx.decodeData(%s,%s,%s) data %s', sessionKey, iv, encryptedData, JSON.stringify(data)));
            return Promise.resolve(data);
        } else {
            // console.error(`${__filename} decodeData  ${JSON.stringify(arguments)} data ${JSON.stringify(data)}`);
            console.error(util.format('wx.decodeData(%s,%s,%s) data %s', sessionKey, iv, encryptedData, JSON.stringify(data)));
            return Promise.reject(data);
        }
    } catch (err) {
        // console.error(`${__filename} decodeData  ${JSON.stringify(arguments)} err ${String(err)}`);
        console.error(util.format('wx.decodeData(%s,%s,%s) err %s', sessionKey, iv, encryptedData, err.toString()));
        return Promise.reject(err);
    }
};