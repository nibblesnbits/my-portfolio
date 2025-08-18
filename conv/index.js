import { convertMarkdownToHTML, rewritePronouns } from "./lib.js";
import fs from "fs";

const original = fs.readFileSync("book.md", "utf8");
// const personalized = rewritePronouns(original, "Sam", "Sam", "he");
const result = convertMarkdownToHTML(original);

fs.writeFileSync("book.html", result);
