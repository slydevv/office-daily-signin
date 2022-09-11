const User = require('../model/Users')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')



const registerUsers = async (req, res) => {

    try{
        if(!req.body.email || !req.body.password){
            throw Error("all fields must be filled") 
        }
        if(!validator.isEmail(req.body.email)){
            throw Error( "email is not valid" )  
        }
        const usedEmail = await User.findOne({email: new RegExp("^" + req.body.email + "$", "i"), })
        if(usedEmail){
        return res.status(400).json({error: "this email is already in use"})
        }
        const usedOfficeName = await User.findOne({officeName: new RegExp("^" + req.body.officeName + "$", "i"), })
        if(usedOfficeName){
            throw Error('Someone in the office is already using this name')
        }
        // hash the pasword
        const hashedPassword = await bcrypt.hash(req.body.password, 12)

        const newUser = new User({
            email: req.body.email,
            password:  hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            officeName: req.body.officeName
        })

        const regUser = await newUser.save()

        const userToReturn = { ...regUser._doc };
        delete userToReturn.password;
     
      return res.json(userToReturn)

    } catch (error){
        res.status(400).json({error: error.message})

    }
}

const loginUsers = async ( req,res ) => {
    try{
        const user = await User.findOne({email: new RegExp("^" + req.body.email + "$", "i"),});
        if(!user){
            throw Error('invalid login credentials')
        }

        const matchPassword = await bcrypt.compare(req.body.password, user.password)
        if(!matchPassword){
            throw Error('invalid login credentials')
        }

       const payload = {userId: user._id}
       const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2d"
       })

       res.cookie("access-token", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
       })

       const userToReturn = {...user._doc}
       delete userToReturn.password;

       return res.status(200).json({
        token: token,
        user: userToReturn,
        officeName: user.officeName
        })
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

const getUser = async ( req, res) => {
    return res.json(req.user)
}

module.exports = {registerUsers, loginUsers, getUser}