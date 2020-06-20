const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const searchTeams = async (searchTerm) => {
  const { data } = await request("searchteams", `/${searchTerm}`);
  return data;
};

const refreshSearchTeams = async (searchTerm) => {
  const data = await searchTeams(searchTerm);
  await outputJson(
    `./data/searchTeams/${searchTerm}.json`,
    data
  );
};

module.exports = { searchTeams, refreshSearchTeams };
