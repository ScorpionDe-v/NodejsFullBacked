import express from 'express'

const app = express();

//c = create => POST (method)
//r = Read  =>GET (method)
//u = Update => PUT (METHOD)
//d = Delete => DELETE(method)

app.get('/suman',(req,res)=>{
    res.send("this is a response")
})

app.post('/instagram_post',(req,res)=>{
  
})

const port =2000;

app.listen(port,()=>console.log(`server is running on port ${port}`))