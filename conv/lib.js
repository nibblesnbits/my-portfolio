import { marked } from "marked";
import fs from "fs";
import path from "path";

// Configure marked with kid-friendly styling options
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false,
  pedantic: false,
});

export function rewritePronouns(
  text,
  originalName,
  targetName,
  pronounKey = "they"
) {
  const PRONOUNS = {
    she: {
      subject: "she",
      object: "her",
      possessiveAdj: "her",
      possessive: "hers",
      reflexive: "herself",
    },
    he: {
      subject: "he",
      object: "him",
      possessiveAdj: "his",
      possessive: "his",
      reflexive: "himself",
    },
    they: {
      subject: "they",
      object: "them",
      possessiveAdj: "their",
      possessive: "theirs",
      reflexive: "themselves",
    },
  };

  const originalPronouns = PRONOUNS["he"]; // assume Sam uses she/her originally
  const newPronouns = PRONOUNS[pronounKey] || PRONOUNS["they"];

  // Case-sensitive + case-insensitive replacements
  const replacements = [
    [new RegExp(`\\b${originalName}\\b`, "g"), targetName],
    [
      new RegExp(`\\b${originalName.toLowerCase()}\\b`, "g"),
      targetName.toLowerCase(),
    ],
    [
      new RegExp(`\\b${originalPronouns.subject}\\b`, "gi"),
      (match) =>
        match[0] === match[0].toUpperCase()
          ? capitalize(newPronouns.subject)
          : newPronouns.subject,
    ],
    [
      new RegExp(`\\b${originalPronouns.object}\\b`, "gi"),
      (match) =>
        match[0] === match[0].toUpperCase()
          ? capitalize(newPronouns.object)
          : newPronouns.object,
    ],
    [
      new RegExp(`\\b${originalPronouns.possessiveAdj}\\b`, "gi"),
      (match) =>
        match[0] === match[0].toUpperCase()
          ? capitalize(newPronouns.possessiveAdj)
          : newPronouns.possessiveAdj,
    ],
    [
      new RegExp(`\\b${originalPronouns.possessive}\\b`, "gi"),
      (match) =>
        match[0] === match[0].toUpperCase()
          ? capitalize(newPronouns.possessive)
          : newPronouns.possessive,
    ],
    [
      new RegExp(`\\b${originalPronouns.reflexive}\\b`, "gi"),
      (match) =>
        match[0] === match[0].toUpperCase()
          ? capitalize(newPronouns.reflexive)
          : newPronouns.reflexive,
    ],
  ];

  let result = text;
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }

  return result;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function personalizeMarkdown(markdown, data) {
  let result = markdown;
  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    result = result.replace(regex, value);
  }
  return result;
}

// Let marked handle the conversion first, then we'll post-process to add classes
function addKidsBookClasses(html) {
  return html
    .replace(/<h1>/g, '<h1 class="chapter-title">')
    .replace(/<h2>/g, '<h2 class="section-title">')
    .replace(/<h3>/g, '<h3 class="subsection-title">')
    .replace(/<p>/g, '<p class="story-text">')
    .replace(/<ul>/g, '<ul class="bullet-list">')
    .replace(/<ol>/g, '<ol class="numbered-list">')
    .replace(/<blockquote>/g, '<blockquote class="story-callout">')
    .replace(/<img /g, '<img class="story-image" ');
}

// CSS styles for kids book
const kidBookCSS = `
<style>
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1a1a1a;
    color: #e0e0e0;
  }

  .chapter-title {
    font-size: 2.5em;
    color: #6ba3f5;
    text-align: center;
    margin: 2em 0 1em 0;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  }

  .section-title {
    font-size: 1.8em;
    color: #6ba3f5;
    margin: 1.5em 0 0.8em 0;
    border-bottom: 2px solid #333;
    padding-bottom: 0.3em;
  }

  .subsection-title {
    font-size: 1.4em;
    color: #6ba3f5;
    margin: 1.2em 0 0.6em 0;
  }

  .story-text {
    font-size: 1.1em;
    margin-bottom: 1.2em;
    text-align: justify;
  }


  .bullet-list, .numbered-list {
    margin: 1em 0;
    padding-left: 2em;
  }

  .bullet-list li {
    margin-bottom: 0.5em;
    list-style-type: '🌟 ';
  }

  .numbered-list li {
    margin-bottom: 0.5em;
  }

  .story-callout {
    background-color: #2a2a2a;
    border-left: 4px solid #6ba3f5;
    padding: 1em;
    margin: 1.5em 0;
    font-style: italic;
    border-radius: 0 6px 6px 0;
    color: #e0e0e0;
  }

  .story-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5em auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  strong {
    color: #e0e0e0;
    font-weight: bold;
  }

  em {
    color: #e0e0e0;
    font-style: italic;
  }

  code {
    background-color: #2a2a2a;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    color: #e0e0e0;
  }

  pre {
    background-color: #2a2a2a;
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    border: 1px solid #444;
    color: #e0e0e0;
  }
</style>`;

export function convertMarkdownToHTML(markdownContent) {
  try {
    const rawHTML = marked.parse(markdownContent);
    const htmlContent = addKidsBookClasses(rawHTML);

    // Create complete HTML document
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kids Book</title>
    ${kidBookCSS}
</head>
<body>
    ${htmlContent}
</body>
</html>`;

    return fullHTML;
  } catch (error) {
    console.error("❌ Error converting markdown:", error.message);
    throw error;
  }
}

// Function to split HTML by chapters (H1 tags)
function splitIntoChapters(htmlContent) {
  // Extract just the body content
  const bodyMatch = htmlContent.match(/<body>([\s\S]*)<\/body>/);
  const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

  // Split by H1 tags (chapter titles)
  const chapters = bodyContent.split(/<h1[^>]*class="chapter-title"[^>]*>/);

  const chapterArray = [];

  for (let i = 1; i < chapters.length; i++) {
    const chapterContent = chapters[i];
    const titleMatch = chapterContent.match(/^([^<]+)</);
    const title = titleMatch ? titleMatch[1].trim() : `Chapter ${i}`;

    chapterArray.push({
      title: title,
      content: `<h1 class="chapter-title">${chapterContent}`,
      filename: `chapter-${i}-${title
        .toLowerCase()
        .replace(/[^\w]+/g, "-")}.html`,
    });
  }

  return chapterArray;
}
