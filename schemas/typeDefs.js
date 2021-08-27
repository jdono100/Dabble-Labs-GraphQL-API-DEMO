const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type CountryData {
    _id: ID
    country: String
    year: String
    squareKm: Int
    totalPopulation: Int
  }
  type Query {
    countriesdata: [CountryData]!
    countrydata(countryId: ID!): CountryData
  }
`;

module.exports = typeDefs;