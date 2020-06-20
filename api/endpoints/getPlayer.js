const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getPlayer = async (gamertag) => {
  const { data } = await request("getplayer", `/${gamertag}/10`);
  return data;
};

const refreshGetPlayer = async (gamertag) => {
  const data = await getPlayer(gamertag);
  await outputJson(`./data/getPlayer/${gamertag}.json`, data);
};

module.exports = { getPlayer, refreshGetPlayer };
