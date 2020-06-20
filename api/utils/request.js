const axios = require("axios");
const fsExtra = require("fs-extra");
const { getSessionId } = require("./session");

const { outputJson, readJson } = fsExtra;

const md5 = require("./md5");
const getSignature = require("./getSignature");
const getTimestamp = require("./getTimestamp");

const baseUrl = "http://api.smitegame.com/smiteapi.svc";
const devId = process.env.DEV_ID;
const token = process.env.TOKEN;

const request = async (endpoint, additional = "") => {
  const sessionId = await getSessionId();
  const timestamp = getTimestamp();
  const signature = getSignature(devId, endpoint, token, timestamp);
  const url = `${baseUrl}/${endpoint}Json/${devId}/${signature}/${sessionId}/${timestamp}${additional}`;
  const response = await axios.get(url);
  return response;
};

module.exports = {
  request,
};
