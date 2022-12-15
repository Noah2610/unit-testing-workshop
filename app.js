const fs = require("fs");
const path = require("path");

function saveDocument(name, body) {
    const filePath = path.resolve(`./documents/${name}.txt`);

    fs.writeFileSync(filePath, body, "utf-8");
}

module.exports = {
    saveDocument,
}