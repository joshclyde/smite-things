const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getGods = async () => {
  const { data } = await request("getgods", "/1");
  return data;
};

const refreshGetGods = async () => {
  const data = await getGods();
  await outputJson("./data/getGods/index.json", data);
  data.forEach(god => {
    outputJson(`./data/getGods/${god.Name}.json`, god)
  });
};

module.exports = { getGods, refreshGetGods };
