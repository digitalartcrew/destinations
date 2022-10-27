const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const { DestinationRouter, AuthRouter } = require("./routes");
const db = require("./db");

//Cookie and Session
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(
  session({
    secret: "awesome",
    resave: true,
    saveUninitialized: true,
  })
);

const passport = require("passport");
require("./config/passport")(passport); //passport configuration

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// render server side template
app.set("view engine", "ejs");
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  db.collection("destinations")
    .find()
    .toArray()
    .then((results) => {
      results.map((res, index) => {
        // helper props
        res.updateModalId = `modal-update-${res._id}`;
        res.deleteModalId = `modal-delete-${res._id}`;
        res.entityIndex = index;

        return res;
      });

      res.render("index.ejs", { destinations: results });
    })
    .catch((err) => res.render("Yo an errror occured", err));
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/api/unsplash", () => {
  return;
});

app.use("/api", DestinationRouter);
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
