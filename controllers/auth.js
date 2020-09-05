const User = require('../models/user');
const JWT = require('jsonwebtoken');
const jwtSecret = 'supersecret';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

exports.postRegister = (req, res) => {
    bcrypt.hash(req.body.password, salt)
        .then(hash => {

            console.log(req.body)
            let newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hash
            }
            console.log(newUser)

            User.find({ email: req.body.email })
                .then(users => {
                    if (users.length < 1) {
                        User.create(newUser)
                            .then(user => {
                                const token = JWT.sign({
                                    userID: user._id,
                                    name: user.name,
                                    email: user.email
                                }, jwtSecret, { expiresIn: '1h' });

                                res.json({
                                    success: true,
                                    accessToken: token
                                })

                            })
                            .catch(err => {
                                console.log(err);
                                res.json({ success: false })
                            })
                    } else {
                        res.json({
                            success: false,
                            message: 'Email already exists.'
                        })
                    }
                })


        }).catch(err => {
            console.log(err);
            res.json({ success: false })
        });
};


exports.postLogin = (req, res) => {

    User.findOne({ email: req.body.email })
        .then(user => {
            bcrypt.compare(req.body.password, user.password)
                .then(hash => {
                    if (hash) {
                        const token = JWT.sign({
                            userID: user._id,
                            name: user.name,
                            email: user.email
                        }, jwtSecret, { expiresIn: '1h' });

                        res.json({
                            success: true,
                            accessToken: token,
                            userID: user._id
                        });
                    } else {
                        res.json({ success: false });
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.json({ success: false });
                })
        })
        .catch(err => {
            console.log(err);
            res.json({ success: false })
        })

};

exports.verifyToken = (req, res) => {
    const decoded = JWT.verify(req.body.token, jwtSecret,
        function (err, decoded) {
            if (err) {
                /*
                  err = {
                    name: 'TokenExpiredError',
                    message: 'jwt expired',
                    expiredAt: 1408621000
                  }
                */
                res.json({
                    success: false,
                    message: "Invalid or Expired Token"
                });
            } else {
                res.json({
                    success: true,
                    message: "Token is valid"
                });
            }
        });
}
