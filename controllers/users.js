const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {layout: 'users/new'});
  },

  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/posts");
    });
  },

  Sendmessage: async (req, res) => {
     const Mymessages = await Message.find({receiver:req.session.user._id})
     res.render("users/messages", {Mymessages: Mymessages})
   },

   Mymessages: async (req, res) => {
     const Mymessages = await Message.find({receiver:req.session.user._id})
     res.render("users/messages", {Mymessages: Mymessages})
   },

  Friends: (req, res) => {
    res.render("users/friends")
  },

  Notifications: (req, res) => {
    res.render("users/notifications")
  },

  Profile: (req, res) => {
    res.render("users/profile")
  },
};

module.exports = UsersController;
