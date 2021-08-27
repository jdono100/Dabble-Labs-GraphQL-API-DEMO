const { CountryData } = require('../models');

const resolvers = {
  Query: {
    countriesdata: async () => {
      return await CountryData.find({});
    },
    countrydata: async () => {
      return await CountryData.findOne({_id: countryId});
    }
  },
}

module.exports = resolvers;
