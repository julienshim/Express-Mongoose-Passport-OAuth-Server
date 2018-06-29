const passport = require('passport');
const GoogleStretegy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    //user.id refers to mongodb user _id, passing onto browser cookie, but should be different for reactNative?
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
});

passport.use(
    new GoogleStretegy({
    //options for the google strategy 
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log('passport callback function fired');
    //check if user already exists in our db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            // console.log(profile);
            if(currentUser){
                // already have the user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                new User ({
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser);
                    done(null, newUser);
                })
            }
        });
        
            
    })
)