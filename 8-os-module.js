const os = require('os')
//info of user
const user = os.userInfo()
console.log(user)

//info on uptime
console.log(`Sys Uptime is ${os.uptime()/3600} hours.\n`)
const currentOS = {
    name: os.type(),
    release:os.release(),
    totalname: os.totalmem(),
    freeMem: os.freemem()
}
console.log(`OS info is: ` ,currentOS)