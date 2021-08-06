const request = require("request");

function printHtml(site) {
  request(site, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(body);
    }
  });
}

module.exports = printHtml;
