const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const cors = require("cors")
const schema = require("./schema")

const app = express()
app.use(cors())

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema
}))

app.listen(5000, () => console.log("Server running on port 5000!"))