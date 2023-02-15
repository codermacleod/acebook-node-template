const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {layout: 'users/new'});
  },

  Create: (req, res) => {
    const email = req.body.email;
    User.findOne({ email: email }).then((user) => {
      if (user) {
        res.render("users/new", {layout: "users/new", error: "Email already in use"})
      }
    });

    if (req.body.password == req.body.confirm_password) {
      const user = new User(req.body); 
      user.save((err) => {
        if (err) {
          throw err;
        }
        // create new session here 
        req.session.user = user
        res.status(201).redirect("/posts");
      });
    } else {
      res.redirect("/users/new");
    }
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

  Search_friends: async (req, res) => {
    const foundUser = await User.find({username: req.query.username})
    res.render("users/search_friends", {foundUser: foundUser});
   },

};

module.exports = UsersController;
