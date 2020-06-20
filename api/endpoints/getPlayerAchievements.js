const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getPlayerAchievements = async (playerId) => {
  const { data } = await request("getplayerachievements", `/${playerId}`);
  return data;
};

const refreshGetPlayerAchievements = async (playerId) => {
  const data = await getPlayerAchievements(playerId);
  await outputJson(
    `./data/getPlayerAchievements/${playerId}.json`,
    data
  );
};

module.exports = { getPlayerAchievements, refreshGetPlayerAchievements };
