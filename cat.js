const fs = require("fs");

function printFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
}

module.exports = printFile;
