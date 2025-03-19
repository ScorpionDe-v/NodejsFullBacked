// console.log("path module")

import path from 'path'

// join two or more file
const fullPath = path.join('/path','index.py','file.java')
// console.log("Files Join=",fullPath)

// absolute path
const absolutePath =path.resolve();

// console.log("we are currently working on =", absolutePath)

// extension name

const extname =path.extname('resume.doxc')

console.log("extname=",extname)

if(extname=='.pdf'){
     console.log("ok")
}
else{
    console.log("not supported")
}