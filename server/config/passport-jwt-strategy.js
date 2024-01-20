const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret_key',
};

passport.use(
    new JWTStrategy(opts, async (jwtPayload, done) => {
        try {
            const doctor = await Doctor.findById(jwtPayload._id || jwtPayload.id);

            if (doctor) {
                return done(null, doctor);
            } else {
                return done(null, false);
            }
        } catch (error) {
            console.error('Error in passport JWT strategy:', error);
            return done(error, false);
        }
    })
);

module.exports = passport;