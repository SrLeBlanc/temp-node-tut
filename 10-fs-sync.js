// asynchronous, non blocking. Synchronous blocking
// two flavors for nodes in callback functions

const{readFileSync, writeFileSync} = require('fs')
// const fs = require('fs') ; fs.readFileSync
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second  = readFileSync('./content/second.txt','utf-8')
//console.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`, //string formatting
    {flag: 'a'} //doubles a line for now, the third parameter
)

console.log('done with this task')
console.log('starting the next one')

