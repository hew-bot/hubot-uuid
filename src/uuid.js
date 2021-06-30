// Description:
//   Make hubot generate uuid
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot uuid me - generate uuid
//
// Author:
//   mrinjamul <mrinjamul@gmail.com>

module.exports = (robot) =>
  robot.respond(/uuid (me)/i, function (msg) {
    return msg.send(uuidv4());
  });

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
