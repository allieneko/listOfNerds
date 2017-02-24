var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');

module.exports = (function () {
    return {
        register: function (req, res) {
            User.find({ name: req.body.name }, function (err, user) {
                // console.log(user)
                if (user.length == 0) {
                    var newUser = new User(req.body);
                    newUser.save(function (err) {
                        if (err) {
                            return res.json({ error: "Something went wrong" });
                        }
                        req.session.user = newUser;
                        req.session.save();
                        res.json({ status: true });
                    });
                } else {
                    req.session.user = user[0];
                    req.session.save();
                    res.json({ status: true });
                }
            })
        },
        check: function (req, res) {
            if (!req.session || !req.session.user) {
                // console.log("Null")
                res.send({ status: false })
                // res.redirect('/')
            } else {
                // console.log("User")
                res.send({ status: true, user: req.session.user })
            }
        },
        getUsers: function (req, res) {
            User.find({})
                .populate('_items')
                .exec(function (err, data) {
                    res.json({ users: data })
                })
        },
        getOneUser: function (req, res) {
            // console.log(req.params.name)
            User.find({ _id: req.params.name })
                .populate('_items')
                .exec(function (err, data) {
                    res.json({ items: data })
                })
        },

        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    }
})()