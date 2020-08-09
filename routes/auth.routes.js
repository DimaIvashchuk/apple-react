const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult, body} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'bad email').isEmail(),
        check('password', 'less then 6 characters').isLength({ min: 6 }),
        body('rpassword').custom((value, { req }) => {
            if (value !== req.body.password) 
              throw new Error('Password confirmation does not match password');
            
            return true;
          })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            
            return res.status(400).json({
                errors: errors.array(),
                message: "Bad data while register"
            })
        }
        
        const {email, password, nickname} = req.body

        const candidate = await User.findOne({ email })

        if(candidate){
            return res.status(400).json({ message: "already registred" })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword, nickname })

        await user.save()
        
        res.status(201).json({ message: "user created" })
        
    } catch (error) {
        res.status(500).json({message: "something went wrong while register"})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'bad email').normalizeEmail().isEmail(),
        check('password', 'Write password').exists()
    ],
    async (req, res) => {
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            req.status(400).json({
                errors: errors.array(),
                message: "Bad data while log in"
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({ email })

        if(!user) {
            return req.status(400).json({ message: "wrong username" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return req.status(400).json({ message: "wrong password" })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )
        
        res.json({ token, userId: user.id })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "something went wrong while log in"})
    }
})


module.exports = router