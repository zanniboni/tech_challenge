const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");

const app = express();

/* Habilitar cross-origin requests */
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

PORT = 4000;
app.listen(PORT, () => {
  console.log("listening port " + PORT);
});
