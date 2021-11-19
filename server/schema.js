const {buildSchema} = require("graphql")

const schema = buildSchema(`

    type Flat {
        id: ID
        flatName: String
        waterCounterInfo: Int
        electDay: Int
        electNight: Int
        gasCounterInfo: Int
    }
    
    input FlatInput {
        id: ID
        flatName: String
        waterCounterInfo: Int
        electDay: Int
        electNight: Int
        gasCounterInfo: Int
    }
    
    type Query {
        getAllFlats: [Flat]
    }
    type Mutation {
        createFlat(input: FlatInput): Flat
    }
    
`)

module.exports = schema