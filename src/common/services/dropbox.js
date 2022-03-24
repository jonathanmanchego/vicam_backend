const { Dropbox } = require('dropbox');

const dbx = new Dropbox({
  accessToken:
    'sl.BEGQPp3hPSMtZqkeiYZd9wyEwiOG4HE6Ka67tkjmfjv0S0CxxuxsqKMeZAlaJkbPN2CFS35AChUqw9GoqdREkbUZQgXjmMn3dloHMEinGzA4c5bugI9tbe9fS8GY5O-yuHR7CTAB3ZDW',
});

module.exports = dbx;
