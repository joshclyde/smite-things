const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getGodRanks = async (playerId) => {
  const { data } = await request("getgodranks", `/${playerId}`);
  return data;
};

const refreshGetGodRanks = async (playerId) => {
  const data = await getGodRanks(playerId);
  await outputJson(
    `./data/getGodRanks/${playerId}.json`,
    data
  );
};

module.exports = { getGodRanks, refreshGetGodRanks };
