const {buildSchema} = require("graphql")

const schema = buildSchema((`

    type Flat {
        
    }
`))

module.exports = schema