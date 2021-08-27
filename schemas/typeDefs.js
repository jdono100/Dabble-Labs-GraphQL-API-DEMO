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
  type Mutation {
    addCountryData(country: String!, year: String!, squareKm: Int!, totalPopulation: Int!): CountryData
    updatePopulationData(id: ID!, totalPopulation: Int!): CountryData
    deleteCountryData(id: ID!): CountryData
  }
`;

module.exports = typeDefs;