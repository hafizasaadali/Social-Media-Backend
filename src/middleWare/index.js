import  Jwt  from "jsonwebtoken"


const middleWare = (req,res,next)=>{
    const header = req.headers
    const token = header.authorization
    token = token.split(" ")
    token = token[1];
    try {
        const data = Jwt.verify(token,"gymrat")
    req.user = data;
    res.json({data})
    } catch (error) {
        res.json({mesage:"invalid token"})
    }next()
}
export default middleWare;
