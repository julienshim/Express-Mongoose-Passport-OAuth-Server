"use strict";

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  // `lastName` is required and of type String
  lastName: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    required: true
  },
  rating: {
    type: Number
    // limit number to between (for example) 1 and 5?  how does this work?
  },
  friend: {
    type: Array,
    default: []
  },
  card: {
    type: Schema.Types.ObjectId,
    ref: "Card"
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;
