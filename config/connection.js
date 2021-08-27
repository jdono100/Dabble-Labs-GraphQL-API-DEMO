require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dabble-graphql-demo', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

module.exports = mongoose.connection;
