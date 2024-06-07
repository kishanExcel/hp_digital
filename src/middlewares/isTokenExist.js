

export const isTokenExist = (req, res, next)=>{

    const token = req.headers.authorization?.split(" ")[1];

    if(!token || token == ' ') 
       return res.status(400).send({success:false, message:"Access token is missing"});

    next()
}