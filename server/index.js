const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const flats = [{
  id: 228,
  flatName: "Квартира 228",
  waterCounterInfo: 1000,
  electDay: 20,
  electNight: 30,
  gasCounterInfo: 40
}];

const app = express();
app.use(cors());


const createFlat = (input) => {
  const id = Date.now();
  return {
    id, ...input
  };
};

const root = {
  getAllFlats: () => {
    return flats;
  },
  createFlat: ({input}) => {
    const flat = createFlat(input);
    flats.push(flat);
    return flat;
  }
};

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}));

app.listen(5000, () => console.log("Server running on port 5000!"));