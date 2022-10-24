const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const { DestinationRouter } = require("./routes");
const db = require("./db");

// render server side template
app.set("view engine", "ejs");
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// test
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  db.collection("destinations")
    .find()
    .toArray()
    .then((results) => res.render("index.ejs", { destinations: results }))
    .catch((err) => res.render("Yo an errror occured", err));
});

app.use("/api", DestinationRouter);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
