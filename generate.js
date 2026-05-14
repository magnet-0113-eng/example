import fs from "fs";

fs.writeFileSync("docs/timestamp.txt", Date.now().toString());

console.log("generated!");
