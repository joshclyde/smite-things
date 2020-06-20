const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getItems = async () => {
  const { data } = await request("getitems", "/1");
  return data;
};

const refreshGetItems = async () => {
  const data = await getItems();
  await outputJson(
    "./data/getItems/index.json",
    data
  );
  data.forEach(item => {
    outputJson(`./data/getItems/${item.DeviceName}.json`, item)
  });
};

module.exports = { getItems, refreshGetItems };
