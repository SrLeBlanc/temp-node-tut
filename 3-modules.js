function sayHello(name){
	console.log('Hello '+name);
	
}

function tutorial01(){
	const amount = 12
	if(amount<10){
	console.log('small number')
	}else{
	console.log('large number')
	}
	console.log('it\'s the bees knees')
}


function tutorial03(){
	const os = require('os')

	//info about current user
	const user = os.userInfo()
	console.log(user)
	const arch = os.arch()
	const cpus = os.cpus()
	const endianess = os.endianness()
	const freemen = os.freemem()
	const prio = os.getPriority()


}

function tutorial011(){
	const names = require('./4-names')
	const sayHi = require('./5-utils')
	const data = require('./6-alternative-flavor')
	// console.log(names)
	// console.log(data)

	require('./7-mind-grenade')
	sayHi('susan')
	sayHi(names.john)
	sayHi(names.peter)
}tutorial01()