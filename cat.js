const fs = require("fs");

function printFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });
}

module.exports = printFile;
