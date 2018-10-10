const express = require('express');
const mongoose = require('mongoose');

const Users = mongoose.model('Users');

const router = express.Router();

router.post('/login', (req, res, next) => {
  const { fullname, email } = req.body;
  Users.findOne({ email }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      const newUser = new Users({ email, name: fullname });
      return newUser.save()
        .then(saved => res.json(saved));
    }
    return res.json(user);
  });
});

router.post('/apply', (req, res, next) => {
  const { userId, position } = req.body;
  Users.findById(userId, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('no user');
    }
    return res.send(position);
  });
});

module.exports = router;
