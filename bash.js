const pwdCmd = require("./pwd");
const lsCmd = require("./ls");
const catCmd = require("./cat");

process.stdout.write("\nprompt > ");

const runningBash = () => {
  let cmd = "";
  process.stdin.on("data", (data) => {
    inputs = data.toString().trim().split(" ");
    cmd = inputs[0];
    file = inputs[1];

    if (cmd === "pwd") {
      pwdCmd();
    } else if (cmd === "ls") {
      lsCmd();
    } else if (cmd === "cat") {
      catCmd(file);
    }
  });
};

runningBash();
