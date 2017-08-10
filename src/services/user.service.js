const User = require('../models/user');
const { hashSync } = require('bcrypt');

module.exports.list = async () => {
  return await User.find();
};

module.exports.setup = async () => {
  let user = new User({
    email: 'joris.sparla@gmail.com',
    username: 'admin',
    password: hashSync('password', 2),
    role: 'admin'
  });
  return await user.save();
};
