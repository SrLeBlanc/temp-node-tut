const path = require('path') //a path module

//Seperater property.
const sepa = path.sep
console.log(sepa)
//join, returns normalizing resulting path
const filePath = path.join(sepa + 'content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)