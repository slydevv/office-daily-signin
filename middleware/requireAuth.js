const jwt = require('jsonwebtoken')
const User = require('../model/Users')

const requireAuth = async (req, res, next) => {

    const token  = req.cookies["access-token"]

    if(!token){
        return  res.status(401).json({error: "no user found"})
      }

    try{
        const {userId} =  jwt.verify(token, process.env.JWT_SECRET)
        
        const user = await User.findById(userId)
        if(user){
            const userToReturn = { ...user._doc }
            delete userToReturn.password
    
            req.user = userToReturn
            return next()
        }
       

    }catch (error){
        res.status(401).json({error:"unauthorized user"})
    }

}

module.exports = requireAuth