import express from 'express';
import User from '../models/user.js';
const router = express.Router();

router.get('/allUsers', async (req, res) => {
    const users = await User.find();
    res.json(users)
})

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        if (!name || !email || !password || !age) return res.json({ error: "All fields are reuqired", success: false });
        await User.create({
            name, email, password, age
        })
        res.redirect('/login')
    } catch (error) {
        console.log("/api/signup error", error.message);
        return res.json({ error, success: false })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.json({ message: "All fileds are reqiored", success: false });

        const user = await User.findOne({ email });
        if (!user) return res.json({ message: "User doesn't exists", success: false });

        const checkPassword = await user.comparePassword(password);
        if (!checkPassword) return res.json({ message: "Passwords don't match", success: false });

        res.redirect('/')
    } catch (error) {
        console.log("/api/login error", error);
        return res.json({ error, success: false })

    }
})
export default router;