const moment = require("moment");
module.exports = currentDateTime;

function currentDateTime() {
  return { date: moment().format("YYYY-MM-DD"), time: moment().format("hh:mm:ss") };
}
