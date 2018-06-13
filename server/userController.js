const updateProfile = (req, res) => {
  console.log(
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.bio,
    req.user.authid
  );
  req.app
    .get("db")
    .updateProfile(
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.bio,
      req.user.authid
    )
    .then(user => res.status(200).json())
    .catch(err => res.status(500).json(err));
};

module.exports = {
  updateProfile
};
