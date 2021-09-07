const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const path = require("path");
const replacements = core.getInput("replacements");
                      
try {
    const inputReplacements = JSON.parse(replacements)
    inputReplacements.forEach(function(x) {
        const fileContents = fs.readFileSync(path.join(process.env.GITHUB_WORKSPACE, x.file)).toString();
        const r = new RegExp(x.find, 'g');
        fs.writeFileSync(path.join(process.env.GITHUB_WORKSPACE,x.file), fileContents.replace(r, x.replacement));
    });
} catch(error){
    console.log("error: " + error.message);
    core.setFailed(error.message)
}