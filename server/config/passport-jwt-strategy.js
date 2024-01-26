const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');

// Options for the JWT Strategy
const opts = {
    // Function to extract the JWT from the request
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),

    // Secret key used to verify the JWT's signature
    secretOrKey: 'secret_key',
};

// Configure Passport to use JWT Strategy
passport.use(
    new JWTStrategy(opts, async (jwtPayload, done) => {
        try {
            // Attempt to find the doctor using the ID from the JWT payload
            const doctor = await Doctor.findById(jwtPayload._id || jwtPayload.id);

            if (doctor) {
                // If the doctor is found, return the doctor object
                return done(null, doctor);
            } else {
                // If no doctor is found, return false
                return done(null, false);
            }
        } catch (error) {
            // Log errors and return error in the Passport strategy
            console.error('Error in passport JWT strategy:', error);
            return done(error, false);
        }
    })
);

// Export the configured passport
module.exports = passport;
