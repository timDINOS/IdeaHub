const mongoose = require("mongoose");
const jwt = require("passport-jwt").Strategy;
const getJwt = require("passport-jwt").ExtractJwt;
const keys = require("../user");
const User = mongoose.model("users");


const choices = {};
choices.jwtFromRequest = getJwt.fromAuthHeaderAsBearerToken();
choices.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new jwt(choices, (jwt_options, done) => {
        User.findById(jwt_options.id)
        .then(user => {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
        })
    );
};