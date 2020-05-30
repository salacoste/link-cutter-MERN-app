const  {Router} = require('express')
const config = require('config')
const bcryptjs = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const JWT = require('jsonwebtoken')
const router = Router()

const User = require('../models/User')




// /api/auth/ *
router.post(
    `/login`, 
    [
        check('email', 'Email is incorrect').normalizeEmail().isEmail(),
        check('password', 'Password should have at least 6 symbols.').exists()
    ], 
    async (req, res) => 
    {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Please, fill correct data for the enter.'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({message: `User doesn't find`})
        }

        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({message: 'Wrong password.'}) 
        }

        const token = JWT.sign(
            { 
                userId: user.id,
            },
            config.get('JWTSecret'),
            { expiresIn: '3d' }
        )

        res.status(200).json({token, userId: user.id})



    }
    catch(e) {
        res.status(500).json({message: 'An error is appeared'})
    }

})

router.post(
    `/register`,
    // MIDDLEWARES
    [
        check('email', 'Email is incorrect').isEmail(),
        check('password', 'Password should have at least 6 symbols.').isLength({ min: 6 })
    ], 
    async (req, res)=> {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'There is an error array.'
            })
        }
        try {
            const {email, password} = req.body
            const cand = await User.findOne({email})

            if (cand) {
            return res.status(400).json({message: 'This user is also presented in database.'})
            }
            
            const hashedPassword = await bcryptjs.hash(password, 12)
            const user = new User({email, isAdmin: false, password: hashedPassword})

            await user.save()
            res.status(201).json({message: 'The user has been created.'})
            
        }

        catch(e) {
            res.status(500).json({message: 'An error is appeared'})
        }

})



module.exports = router