console.clear();
const {
  spawn: a
} = require("child_process");
const b = require("express");
const c = b();
const d = require("axios");
const e = require("chalk");
const f = require("./Nayanc.js");
const g = require("path");
const h = process.env.PORT || 8080 || 9000 || 5555 || 5050 || 5000 || 3003 || 2000 || 1029 || 1010;
c.get("/", function (a, b) {
  b.sendFile(g.join(__dirname, "/website/Nayan.html"));
});
console.clear();
function i(a) {
  if (a) {
    f(a, "starting");
  } else {
    "";
  }
  console.log(e.blue("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n             DEPLOYING MAIN SYSTEM\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n"));
  f.loader("deploying app on port " + e.blueBright(h));
  c.listen(f.loader("app deployed on port " + e.blueBright(h)));
  console.clear();
  d.get("https://raw.githubusercontent.com/cyber-cat-abdulla/ABDULLA-BOT/main/update.json").then(a => {
    f(a.data.name, "[ NAME ]");
    f("Version: " + a.data.version, "[ VERSION ]");
    f(a.data.description, "[ DESCRIPTION ]");
    f(a.data["new command"], "[ NEW COMMAND ]");
    f(a.data.update, "[ UPDATE CMND ]");
    f(a.data.main, "[ FORK ]");
  });
  console.log(e.blue("            ┳┓┏┓┓┏┏┓┳┓  ┳┓┏┓┏┳┓\n            ┃┃┣┫┗┫┣┫┃┃━━┣┫┃┃ ┃ \n            ┛┗┛┗┗┛┛┗┛┗  ┻┛┗┛ ┻ "));
  console.log(e.blue("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n             ABDULLA-BOT UPDATE \n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n"));
}
;
i();
