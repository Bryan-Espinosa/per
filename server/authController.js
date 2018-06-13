const Auth0Strategy = require("passport-auth0");
const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;
const getUser = (req, res) => {
  req.app
    .get("db")
    .getUserByAuthID(req.user.authid)
    .then(user => res.status(200).json(user[0]))
    .catch(err => res.status(500).json(err));
};
const Strategy = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    scope: "openid profile email",
    callbackURL: "/auth"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localHost:3000/");
  });
};

module.exports = {
  getUser,
  Strategy,
  logout
};
