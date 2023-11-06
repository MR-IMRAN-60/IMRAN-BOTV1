console.clear();
const {
  spawn: a
} = require("child_process");
const b = require("express");
const c = b();
const d = require("chalk");
const e = require("axios");
const f = require("./Nayanc.js");
const g = require("path");
const h = process.env.PORT || 8080 || 9000 || 5555 || 5050 || 5000 || 3003 || 2000 || 1029 || 1010;
c.get("/", function (a, b) {
  b.sendFile(g.join(__dirname, "/website/Nayan.html"));
});
console.clear();
function i(b) {
  if (b) {
    f(b, "starting");
  } else {
    "";
  }
  console.log(d.blue("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n             DEPLOYING MAIN SYSTEM\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n"));
  f.loader("deploying app on port " + d.blueBright(h));
  c.listen(f.loader("app deployed on port " + d.blueBright(h)));
  e.get("https://main.n4y4n-server.repl.co/uptimerobot/create?url=https://" + process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co").then(a => {
    f(a.data.nayan, "[UPTIME]");
  });
  const g = a("node", ["--trace-warnings", "--async-stack-traces", "Nayanb.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });
  g.on("close", a => {
    if (a != 0 || global.countRestart && global.countRestart < 5) {
      i();
      global.countRestart += 1;
      return;
    } else {
      return;
    }
  });
  g.on("error", function (a) {
    f("an error occurred : " + JSON.stringify(a), "error");
  });
}
;
i();
