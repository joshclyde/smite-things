const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getTeamPlayers = async (clanId) => {
  const { data } = await request("getteamplayers", `/${clanId}`);
  return data;
};

const refreshGetTeamPlayers = async (clanId) => {
  const data = await getTeamPlayers(clanId);
  await outputJson(
    `./data/getTeamPlayers/${clanId}.json`,
    data
  );
};

module.exports = { getTeamPlayers, refreshGetTeamPlayers };
