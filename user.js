const express = require("express");
const mongo = require("mongoose");
const parse_body = require("body-parser");
const passport = require("passport");
const bodyParser = require("body-parser");
const database = exports.mongoURI;

const users = require("./userLogin");

mongo.connect(database, {useNewUrlParser: true}).then(() => console.log("Successfully Connected!")).catch(err => console.log(err));

const app = express();

app.use(parse_body.urlencoded({extended: false}));

app.use(parse_body.json());

module.exports = {
    mongoURI: "",
    secretOrKey: "secret"
};

app.use(passport.initialize());

require("./Configuration/passport")(passport);

app.use("./userLogin", users);

const connection_port = 5000 || process.env.PORT;

app.listen(connection_port, () => console.log(`Server Running on port ${connection_port} !`));