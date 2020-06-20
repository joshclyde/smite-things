const md5 = require("./md5");

// 2020 05 02 21 13 11
const getSignature = (devId, endpoint, token, timestamp) => {
  return md5(`${devId}${endpoint}${token}${timestamp}`);
};

module.exports = getSignature;
