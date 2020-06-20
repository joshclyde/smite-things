const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getPatchInfo = async () => {
  const { data } = await request("getpatchinfo");
  return data;
};

const refreshGetPatchInfo = async () => {
  const data = await getPatchInfo();
  await outputJson(`./data/getPatchInfo/index.json`, data);
};

module.exports = { getPatchInfo, refreshGetPatchInfo };
