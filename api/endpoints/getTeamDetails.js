const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getTeamDetails = async (clanId) => {
  const { data } = await request("getteamdetails", `/${clanId}`);
  return data;
};

const refreshGetTeamDetails = async (clanId) => {
  const data = await getTeamDetails(clanId);
  await outputJson(
    `./data/getTeamDetails/${clanId}.json`,
    data
  );
};

module.exports = { getTeamDetails, refreshGetTeamDetails };
