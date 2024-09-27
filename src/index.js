const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports = app;

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(3080, () => console.log("Server ready on port 3080."));

// module.exports = app;
