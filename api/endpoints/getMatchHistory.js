const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getMatchHistory = async (playerId) => {
  const { data } = await request("getmatchhistory", `/${playerId}`);
  return data;
};

const refreshGetMatchHistory = async (playerId) => {
  const data = await getMatchHistory(playerId);
  await outputJson(
    `./data/getMatchHistory/${playerId}.json`,
    data
  );
};

module.exports = { getMatchHistory, refreshGetMatchHistory };
