const express = require("express");

const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}.`);
});

module.exports = app;
