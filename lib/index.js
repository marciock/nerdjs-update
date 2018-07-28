const sh=require('shelljs');
const proc=require('child_process');
const fs=require('fs');


proc.execSync('npm install',{stdio:'inherit'});
sh.cd('dist');

sh.cp('./node_modules/nerdjs-config/dist/nerdbinds.js','./dist/nerdbinds.js');
sh.cp('./node_modules/nerdjs-config/dist/nerdhttp.js','./dist/nerdhttp.js');
sh.cp('./node_modules/nerdjs-config/dist/nerdrouter.js','./dist/nerdrouter.js');
sh.cp('./node_modules/nerdjs-config/dist/nerdcreator.js','./dist/nerdcreator.js');



sh.cd('..');

