// console.log("we are learning about the module in node.js")

// const {sum,sub,mul,div,mod} = require('./utils')

import{sum,sub,mul,div,mod} from './utils.js'

console.log("Addition of two number=",sum(10,20))
console.log("Subtraction of two number=",sub(10,20))
console.log("Multiplication of two number=",mul(10,20))
console.log("Division of two number=",div(10,20))
console.log("Mode of two number=",mod(10,20))

