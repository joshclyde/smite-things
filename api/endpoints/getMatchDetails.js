const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getMatchDetails = async (matchId) => {
  const { data } = await request("getmatchdetails", `/${matchId}`);
  return data;
};

const refreshGetMatchDetails = async (matchId) => {
  const data = await getMatchDetails(matchId);
  await outputJson(
    `./data/getMatchDetails/${matchId}.json`,
    data
  );
};

module.exports = { getMatchDetails, refreshGetMatchDetails };
