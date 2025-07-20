
const logger = (req,res,next)=>{
    console.log(`[custome logger] ${req.method} ${req.path}`)
    next();
} 

module.exports=logger;