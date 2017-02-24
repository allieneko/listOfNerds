var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');

module.exports = (function () {
    return {
        addItem: function (req, res) {
            // console.log(req.body)
            req.body.createdby = req.session.user.name;
            if (req.body.friend) {
                req.body._user = [req.session.user._id, req.body.friend]
            } else {
                req.body._user = [req.session.user._id];
            }
            var newItem = new Item(req.body)
            // console.log(newItem)
            newItem.save(function (err) {
                if (err) {
                    // console.log("in the error")
                    res.json({ status: false })
                } else {
                    User.findOne({ _id: req.body._user }, function (err, data) {
                        // console.log(req.body._user)
                        // console.log(data)
                        // console.log(newItem)
                        User.findByIdAndUpdate(req.body._user._id, { $push: { _items: newItem._id } }, function (err, item) {
                            // res.redirect('/#!/dashboard')
                        if (req.body.friend) {User.findByIdAndUpdate(req.body.friend, { $push: { _items: newItem._id } }, function (err, item) {
                            // console.log(item)
                            // res.redirect('/#!/dashboard')
                        })}
                    })
                    // console.log("in the else statement")
                    res.json({ status: true, item: newItem });
                    })
                }
            })
        },

        getItems: function (req, res) {
            Item.find({})
                .populate('_user')
                .exec(function (err, data) {
                    res.json({ items: data, user: req.session.user })
                })
        },

        likeItems: function (req, res) {
            // console.log(req.params.id);
            Item.findOne({ _id: req.params.id }, function (err, data) {
                // console.log(data)
                var newlikes = data.likes + 1;
                // console.log(newlikes);
                Item.findByIdAndUpdate(req.params.id, { $set: { likes: newlikes } }, function (err, item) {
                    // console.log("Like count " + data)
                    res.redirect('/#!/dashboard')

                })
            })
        },
        updateStatus: function (req, res) {
            // console.log(req.params.id);
            Item.findOne({ _id: req.params.id }, function (err, data) {
                // console.log(data.status)

                if (data.status == 'Active') {
                    Item.findByIdAndUpdate(req.params.id, { $set: { status: 'Inactive' } }, function (err, item) {
                        // console.log(item.status)
                        res.redirect('/#!/dashboard')
                    })
                } else {
                    Item.findByIdAndUpdate(req.params.id, { $set: { status: 'Active' } }, function (err, item) {
                        // console.log(item.status)
                        res.redirect('/#!/dashboard')
                    })
                }
            })
        },
    }

})()