const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const { logout, Strategy, getUser } = require(`${__dirname}/authController`);
const { updateProfile } = require(`${__dirname}/userController`);
// const Auth0Strategy = require("passport-auth0");
// const { strategy, logout } = require(`${__dirname}/authcontroller`);

const port = process.env.PORT || 3001;
const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(cors());
app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000000 * 24 * 7 }
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(Strategy);
passport.serializeUser((user, done) => {
  app
    .get("db")
    .getUserByAuthID(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .addUserByAuthID([user.name.givenName, user.name.familyName, user.id])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/profileInfo",
    failureRedirect: "http://localhost:3000/auth"
  })
);
app.get("/logout", logout);
app.get("/api/getUser", getUser);
app.get("/api/test", (req, res, next) => console.log("hit"));

app.put("/api/updateProfile", updateProfile);

app.listen(port, () => console.log(`listening on port ${port}`));
