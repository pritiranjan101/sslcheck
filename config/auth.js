

import webpack from 'webpack'
import passport from 'passport';
import express from 'express';
import { Strategy as FacebookStrategy} from 'passport-facebook';




app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'read_stream' })
);


app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
);


passport.use(new FacebookStrategy({
    clientID: '307073576297180',
    clientSecret: '8005436762bb5deb57e303722341b026',
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));