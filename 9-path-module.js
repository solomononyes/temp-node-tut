const path = require(`path`)

console.log(path.sep);

const filePath = path.join(`content2`, `test2.txt`)
console.log(filePath);


const absolute = path.resolve(__dirname,filePath)

console.log(absolute);