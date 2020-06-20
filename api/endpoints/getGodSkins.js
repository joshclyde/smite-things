const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const getGodSkins = async (godId) => {
  const { data } = await request("getgodskins", `/${godId}/10`);
  return data;
};

const refreshGetGodSkins = async () => {
  const gods = await readJson(
    "./data/getGods/index.json"
  );
  gods.forEach((god) => {
    getGodSkins(god.id).then((data) => {
      outputJson(
        `./data/getGodSkins/${god.Name}.json`,
        data
      );
    });
  });
};

module.exports = { getGodSkins, refreshGetGodSkins };
