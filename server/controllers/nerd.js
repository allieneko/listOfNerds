var mongoose = require('mongoose');
var User = mongoose.model('User');
var Nerd = mongoose.model('Nerd');

module.exports = (function () {
    return {
        addNerd: function (req, res) {
            req.body._user = req.session.user._id;
            var newNerd = new Nerd(req.body)
            // console.log(newNerd)
            newNerd.save(function (err) {
                if (err) {
                    res.json({ status: false })
                } else {
                    res.json({ status: true, nerd: newNerd });
                }
            })
        },

        getNerds: function (req, res) {
            Nerd.find({})
                .populate('_user')
                .exec(function (err, data) {
                    res.json({ nerds: data, user: req.session.user })
                })
        },

        likeNerds: function (req, res) {
            // console.log(req.params.id);
            Nerd.findOne({ _id: req.params.id }, function (err, data) {
                // console.log(data)
                var newlikes = data.likes + 1;
                // console.log(newlikes);
                Nerd.findByIdAndUpdate(req.params.id, { $set: { likes: newlikes } }, function (err, nerd) {
                    // console.log("Like count " + data)
                    res.redirect('/#!/dashboard')

                })
            })
        },
        updateStatus: function (req, res) {
            // console.log(req.params.id);
            Nerd.findOne({ _id: req.params.id }, function (err, data) {
                // console.log(data.status)
                if (data.status == 'Active') {
                    Nerd.findByIdAndUpdate(req.params.id, { $set: { status: 'Inactive' } }, function (err, nerd) {
                        // console.log(nerd.status)
                        res.redirect('/#!/dashboard')
                    })
                } else {
                    Nerd.findByIdAndUpdate(req.params.id, { $set: { status: 'Active' } }, function (err, nerd) {
                        // console.log(nerd.status)
                        res.redirect('/#!/dashboard')
                    })
                }
            })
        },
    }

})()