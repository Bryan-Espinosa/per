const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const { logout, Strategy, getUser } = require(`${__dirname}/authController`);
const { updateProfile } = require(`${__dirname}/userController`);
const {
  getJobs,
  appJobs,
  getAppJobs,
  deleteJobs
} = require(`${__dirname}/jobsController`);

const path = require("path");
const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(`${__dirname}/../build`));

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
          });
      } else {
        return done(null, response[0]);
      }
    });
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "/profileInfo",
    failureRedirect: "/auth"
    // successRedirect: "http://localhost:3000/profileInfo",
    // failureRedirect: "http://localhost:3000/auth"
  })
);
app.get("/logout", logout);
app.get("/api/getUser", getUser);
app.get("/api/test", (req, res, next) => console.log("hit"));
app.get("/api/getJobs", getJobs);
app.get("/api/getAppJobs", getAppJobs);

app.post("/api/appJobs", appJobs);

app.delete("/api/deleteJobs/:jobid", deleteJobs);

app.put("/api/updateProfile", updateProfile);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => console.log(`listening on port ${port}`));
