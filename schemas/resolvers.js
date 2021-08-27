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
  Mutation: {
    addCountryData: async (parent, { country, year, squareKm, totalPopulation }) => {
      return await CountryData.create({ country, year, squareKm, totalPopulation });
    },
    updatePopulationData: async (parent, { id, totalPopulation }) => {
      return await CountryData.findOneAndUpdate({ _id: id }, { totalPopulation }, { new: true })
    },
    deleteCountryData: async (parent, { id }) => {
      return await CountryData.findByIdAndDelete({_id: id})
    }
  }
}

module.exports = resolvers;
