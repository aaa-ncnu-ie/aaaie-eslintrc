#! /usr/bin/env node

var fs = require('fs');
var program = require('commander');
var path = require('path');
var _  = require('lodash');

program
  .arguments('<includeReact')
  .option('-r, --react', 'Include ReactJS rules')
  .option('-d, --dest [dest]', 'Destination of the created aaaie eslint file')
  .parse(process.argv);

if(!program.dest){
    console.log("Destination is required");
    return;
}
var regRules = JSON.parse(fs.readFileSync(path.join(__dirname, './eslintrc-base.json'), 'utf8'));
var template = JSON.parse(fs.readFileSync(path.join(__dirname, './eslintrc-template.json'), 'utf8'));
var reactRules = {};
if (program.react) {
  reactRules = JSON.parse(fs.readFileSync(path.join(__dirname, './eslintrc-react.json'), 'utf8'));
  template.plugins.push("react");
  template.settings.react = {
    "pragma": "React"
  }
}
template.rules = _.merge(template.rules, regRules, reactRules);
fs.writeFile(path.join(program.dest, '.eslintrc.json'), JSON.stringify(template, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("aaaie eslint file was created!");
}); 
