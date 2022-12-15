const fs = require("fs");
const path = require("path");
const { saveDocument } = require("./app.js");

test("document is saved to file", () => {
    const name = "myDocumentName";
    const body = "Hello Document From Test";
    saveDocument(name, body);

    const filePath = path.resolve(`./documents/${name}.txt`);
    const doesFileExist = fs.existsSync(filePath);

    expect(doesFileExist).toBe(true);
});

test("document has body with expected content", () => {
    const name = "myDocumentName";
    const body = "Hello Document From Test";
    saveDocument(name, body);

    const filePath = path.resolve(`./documents/${name}.txt`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    expect(fileContent).toBe(body);
})