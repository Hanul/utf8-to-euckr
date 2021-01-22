#!/usr/bin/env node
import { program } from "commander";
import iconv from "iconv-lite";
import fs from "fs";

program
    .arguments("<path>")
    .action((path: string) => {
        path = path.trim();
        const buffer = fs.readFileSync(path);
        const content = iconv.decode(buffer, "utf8");
        const encoded = iconv.encode(content, "euc-kr");
        fs.writeFileSync(`${path.substring(0, path.lastIndexOf("."))} (euc-kr)${path.substring(path.lastIndexOf("."))}`, encoded, { encoding: "binary" });
    });
program.parse(process.argv);
