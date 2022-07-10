const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')



function initialize(passport, getUserByEmail, getUserById){
  const authenticateUser = async (email, password, done) =>{
    const user = getUserByEmail
    if(user==null){
      return done(null,flase, {message: 'No user with that email'})
    }

    try {
      if (await bcrypt.compare(password, user.password)){
        return done(null, user)

      }else {
        return done(null, false, {message: 'password incorrect'})
      }
    } catch (e){
      return done(e)
    }

    }

    passport.use(new LocalStrategy({ usernameField: 'email'},
    authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((user, done) => {
      return done(null, getUserById(id))
    })
  }
module.exports = initialize
