import passport from 'passport';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import LocalStrategy from 'passport-local';
import User from '../models/user';

const secret = process.env.SECRET;

passport.serializeUser((user, done) => {
    console.log('user: ', user);
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (username, password, done) => {
    console.log('passport: ', username, password)
    const findUser = async () => {
        try {
            const user = await User.findOne({ email: username });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.'});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = await jwt.sign({ id: user._id }, secret);
                return { token, password: null, ...user._doc };
            }
            return done(null, false, { message: 'Incorrect password.' });
        }
        catch (e) {
            console.log('e: ', e);
            return e;
        }
    };
    return findUser.then(user => user).catch(e => e);
}));
