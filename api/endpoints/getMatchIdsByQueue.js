const fsExtra = require("fs-extra");
const { request } = require("../utils/request");
const { outputJson, readJson } = fsExtra;

const mapQueue = {
  conquest: 426,
};

const getMatchIdsByQueue = async (queue, date, hour) => {
  const queueId = mapQueue[queue];
  const { data } = await request(
    "getmatchidsbyqueue",
    `/${queueId}/${date}/${hour}`
  );
  return data;
};

// hour: 0-23
const refreshGetMatchIdsByQueue = async (queue, date, hour) => {
  const data = await getMatchIdsByQueue(queue, date, hour);
  console.log(data);
  await outputJson(
    `./data/getMatchIdsByQueue/${queue}/${date}/${hour}.json`,
    data
  );
};

module.exports = { getMatchIdsByQueue, refreshGetMatchIdsByQueue };
