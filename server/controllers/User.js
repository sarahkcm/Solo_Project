import config from 'config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../models/User.js";
import data from "../data.js";

export const insertUser= async(req,res)=>{
    await User.deleteMany({});
    const importUsers = await User.insertMany(data.users);
    res.send({importUsers});
}

export const signup = (req,res) => {
    const { name, email, password,admin } = req.body;

    if(!name || !email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json({msg: 'User already exists'});

        const newUser = new User({ name, email, password,admin });

        // Create salt and hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        jwt.sign(
                            { id: user._id },
                            config.get('JWT_TOKEN_SECRET'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user._id,
                                        name: user.name,
                                        email: user.email,
                                        admin: user.admin
                                    }
                                });
                            }
                        )
                    });
            })
        })
    })
}
