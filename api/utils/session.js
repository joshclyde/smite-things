const axios = require("axios");
const fsExtra = require("fs-extra");
const { differenceInMinutes, addHours } = require("date-fns");
const { outputJson, readJson } = fsExtra;

const getTimestamp = require("./getTimestamp");
const getSignature = require("./getSignature");

const baseUrl = "http://api.smitegame.com/smiteapi.svc";
const devId = process.env.DEV_ID;
const token = process.env.TOKEN;

// 2020 06 00 20 50 54
const createSession = async () => {
  const endpoint = "createsession";
  const timestamp = getTimestamp();
  console.log(timestamp);
  const signature = getSignature(devId, endpoint, token, timestamp);
  const { data } = await axios.get(
    `${baseUrl}/createsessionJson/${devId}/${signature}/${timestamp}`
  );
  if (data.ret_msg === "Approved") {
    return data;
  } else {
    console.log(data);
    throw new Error(
      "Failed to create session. TODO make this message more helpful"
    );
  }
};

const pathToSessionId = "./data/sessionId.json";

const getSessionId = async () => {
  const { session_id, timestamp } = await readJson(pathToSessionId);
  const createDate = new Date(timestamp);
  const currentDate = addHours(new Date(), 4);
  if (session_id && differenceInMinutes(currentDate, createDate) < 15) {
    // sessionId will last 15 minutes
    return session_id;
  } else {
    const data = await createSession();
    await outputJson(pathToSessionId, data);
    return data.session_id;
  }
};

module.exports = {
  getSessionId,
};
