// console.log("file Handling");

import { readFile, writeFile,appendFile,mkdir} from "fs/promises";

//read file content

const read_file = async(fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
};
// read_file('sample.txt')

// create file
const create_file=async(fileName,content)=>{
  await writeFile(fileName, content) 
  console.log("File created successfully..")
}
// create_file('ai.py','this is a testing file')
// create_file('ai.py','this is a testing file')
// create_file('app.jsx','this is a react file')


//add content to file
const append_File = async (fileName,content)=>{
     await appendFile(fileName,content);
     console.log("extra content added successfully...");
}


// append_File('app.jsx',"This is my extra content")

//create folder or directory

const create_dir=async(dir)=>{
    await mkdir(dir,{recursive:true})
}
// create_dir('public')

// src/components/java recursive folder
// create_dir('src/components/java')
create_dir('src/py')