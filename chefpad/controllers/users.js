function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(user);
        res.json({token: createJWT(user)});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  }).catch(err => res.status(401).json(err));
}



/*---- Helper Function ----*/

function createJWT(user) {
  return jwt.sign(
      {user},
      SECRET,
      {expiresIn: '24h'}
    );
}

module.exports = {
  signup,
  login
};
