const pwdCmd = require("./pwd");
const lsCmd = require("./ls");

function prompting() {
  process.stdout.write("\nprompt > ");

  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
      pwdCmd();
    } else if (cmd === "ls") {
      lsCmd();
    }
  });
}

prompting();
