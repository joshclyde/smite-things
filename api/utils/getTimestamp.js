// 6/9/2020 12:14:42 PM
// 2020 06 09 12 14 40

const getTimestamp = () => {
  let timestamp = "";
  const date = new Date();
  timestamp += date.getUTCFullYear().toString().padStart(4, "0");
  timestamp += (date.getUTCMonth() + 1).toString().padStart(2, "0");
  timestamp += date.getUTCDate().toString().padStart(2, "0");
  timestamp += date.getUTCHours().toString().padStart(2, "0");
  timestamp += date.getUTCMinutes().toString().padStart(2, "0");
  timestamp += date.getUTCSeconds().toString().padStart(2, "0");
  return timestamp;
};

module.exports = getTimestamp;
