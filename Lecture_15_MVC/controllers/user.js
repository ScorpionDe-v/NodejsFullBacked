import {} from '../Models/User.js'
export const userRegister= async(req,res)=>{
    
    // console.log("getting the data from body",req.body);
    try {
        let user =await User.create(req.body);
        res.json({
            message:"User Created Successfully..!",
            Newuser:user,
            succeess:true
        });
    } catch (error) {
       res.json({message:error.message}) 
    }}