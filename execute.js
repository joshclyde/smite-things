// https://docs.google.com/document/d/1OFS-3ocSx-1Rvg4afAnEHlT3917MAK_6eJTR6rzr-BM/edit
const {
  refreshGetMatchIdsByQueue,
} = require("./src/api/endpoints/getMatchIdsByQueue");
const { readJSON } = require("fs-extra");

const execute = async () => {
  const json = await readJSON(
    `./data/getMatchIdsByQueue/conquest/20200606/0.json`
  );
  console.log(json.length);

  let total = 0;
  for (let i = 0; i < 24; i++) {
    const json = await readJSON(
      `./data/getMatchIdsByQueue/conquest/20200606/${i}.json`
    );
    console.log(`${i}: ${json.length}`);
    total += json.length;
  }
  console.log(`Total: ${total}`);
};

execute();
