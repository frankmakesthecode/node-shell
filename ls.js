const fs = require("fs");

function printListDir() {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
    }
  });
}

module.exports = printListDir;
