const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');

const MONGODB_URL = 'mongodb\://127.0.0.1:27017/nodeblog'
const option = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 3000,
    // user: 'tujiaw',
    // pass: 'fighting'
  }
mongoose.connect(MONGODB_URL, option);

module.exports = mongoose;
