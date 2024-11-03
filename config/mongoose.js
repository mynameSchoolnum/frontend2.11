const mongoose = require('mongoose');
const config = require('./config');

module.exports = function() {
  mongoose.connect(config.ATLASDB);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', () => {
    console.log('====> Connected to MongoDB.');
  });
};