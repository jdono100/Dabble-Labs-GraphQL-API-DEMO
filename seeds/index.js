const db = require('../config/connection');
const { CountryData } = require('../models');

const cData = require('./countryData.json');

db.once('open', async () => {
  await CountryData.deleteMany({});
  await CountryData.insertMany(cData);
  console.log('Database seeded!');
  process.exit(0);
});
