const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
// const Auth0Strategy = require("passport-auth0");
// const { strategy, logout } = require(`${__dirname}/authcontroller`);

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(json());
app.get("/api/test", (req, res, next) => console.log("hit"));

app.listen(port, () => console.log(`listening on port ${port}`));
