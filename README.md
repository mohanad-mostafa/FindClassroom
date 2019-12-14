# FindClassroom

An app that helps you find an empty classroom in the university when the library is full.

# How to run :

node server.js in the backend
npm start in the frontend


# Dependencies :
express-promise-router
passport
bcryptjs
passport-jwt
passport-local
passport-google-plus-token
passport-facebook-token
cors



# Config

module.exports = {
  JWT_SECRET: 'write your token here',
  oauth: {
    google: {
      clientID: 'Your google client id',
      clientSecret: 'your google client secret'
    },
    facebook: {
      clientID: 'Your facebook ClientId',
      clientSecret: 'Your fb client secret'
    }
  }
};

# Docker
docker run -p 49160:5000 mohanad-mostafa/findclassroom
