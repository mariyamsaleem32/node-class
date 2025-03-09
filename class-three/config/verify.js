import jwt from 'jsonwebtoken';
import 'dotenv/config';

const tokenVerification = (req, res, next) => {
try{
    if(req.headers?.authorization){
     const token = req.headers.authorization.split(" ")[1]
     const decoded = jwt.verify(token, process.env.JWT_SCRET)
        if(decoded){
            next()
        }else{
        res.status(203).send({status:203,message:'token unauthorized'})
        }
    }else{
        res.status(203).send({status:203,message:'token not provided'})
    }
}catch(err){
    res.status(203).send({status:203,message:'token unauthorized'})
}
}
  
export default tokenVerification;