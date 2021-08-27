const { Schema, model } = require('mongoose');

const countrySchema = new Schema(
  {
    country: {
      type: String
    },
    year: {
      type: String
    },
    squareKm: {
      type: Number
    },
    totalPopulation: {
      type: Number
    }
  }
);

const CountryData = model('CountryData', countrySchema);

module.exports = { CountryData };
