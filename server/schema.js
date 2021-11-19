const {buildSchema} = require("graphql")

const schema = buildSchema(`

    type Flat {
        id: ID
        flatName: String
        waterCounterInfo: String
        electDay: String
        electNight: String
        gasCounterInfo: String
    }
    
    input FlatInput {
        id: ID
        flatName: String
        waterCounterInfo: String
        electDay: String
        electNight: String
        gasCounterInfo: String
    }
    
    type Query {
        getAllFlats: [Flat]
    }
    type Mutation {
        createFlat(input: FlatInput): Flat
    }
    
`)

module.exports = schema