import { readFileSync } from "node:fs";

const entry = readFileSync(
  new URL("./text.txt", import.meta.url),
  "utf8",
).trimEnd();

console.log(entry);
