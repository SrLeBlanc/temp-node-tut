const {readFile, writeFile}  = require('fs')
console.log('start')
// use callback, run it when you're done.
readFile('./content/first.txt',
    'utf8',
    (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        // console.log(result) //you need to read the second file here.
        const first = result;
        readFile('./content/second.txt',
            'utf8',
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                const second = result
                writeFile(
                    './content/result-async.txt',
                    `Here is the callback function : ${first}, ${second}`,
                    (err,result) =>{
                        if(err){
                            console.log(err)
                            return
                        }
                        console.log('done with this task') //undefined
                    }
                )

            }
            )
    } //callback function access if it's all cool
    //without utf coding we get the buffer
)
console.log('starting next task')