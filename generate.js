import fs from "fs";

fs.writeFileSync("timestamp.txt", Date.now().toString());

console.log("generated!");
