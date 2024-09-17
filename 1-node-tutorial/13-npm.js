//npm --version

//local dependency - use it only in particulat project
//npm i <packageName>

//global dependency - use it in any project
//npm install g <packageName>

//package.json - manifest file (stores important info ablut project/package)
//manual approch ()
//npm init (step by step, press enter to skip)
//npm init -y (everything defualt)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

console.log(_.flattenDeep(items));

//For intalling devDependency (npm install <package name> -D (or --save-dev)


//For uninstalling - npm uninstall <packageName>