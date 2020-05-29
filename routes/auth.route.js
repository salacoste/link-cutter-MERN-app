const  {Router} = require('express')
const bcryptjs = require('bcryptjs')
const {check, validationResult} = require('express-validator')

const router = Router()

const User = require('../models/User')




// /api/auth/ *
router.post(
    `/login`, 
    async (req, res) => 
    {
    try {
        await fetch
    }
    catch(e) {
        res.status(500).json({message: 'An error is appeared'})
    }

})

router.post(
    `/register`,
    // MIDDLEWARES
    [
        check('email', 'Email error').isEmail(),
        check('password', 'Password Error').isLength({ min: 6 })
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
            const user = new User({email, password: hashedPassword})

            await user.save()
            res.status(201).json({message: 'The user has been created.'})
            
        }

        catch(e) {
            res.status(500).json({message: 'An error is appeared'})
        }

})



module.exports = router