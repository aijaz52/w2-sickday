import { readFileSync } from "node:fs";

const excuse = readFileSync(new URL("text.txt", import.meta.url), "utf8");
process.stdout.write(excuse);
