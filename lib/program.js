#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const fs_1 = __importDefault(require("fs"));
commander_1.program
    .arguments("<path>")
    .action((path) => {
    path = path.trim();
    const buffer = fs_1.default.readFileSync(path);
    const content = iconv_lite_1.default.decode(buffer, "utf8");
    const encoded = iconv_lite_1.default.encode(content, "euc-kr");
    fs_1.default.writeFileSync(`${path.substring(0, path.lastIndexOf("."))} (euc-kr)${path.substring(path.lastIndexOf("."))}`, encoded, { encoding: "binary" });
});
commander_1.program.parse(process.argv);
//# sourceMappingURL=program.js.map