const express = require("express");
const router = express.Router();
const db = require("./../db");

router.get("/", (req, res) => {
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

      console.log("User: ", req.user.username);
      res.render("index.ejs", {
        destinations: results,
        username: req.user.username,
      });
    })
    .catch((err) => res.render("Yo an errror occured", err));
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.send(200);
});

router.get("/loggedin", () => {
  res.send(req.isAuthenticated() ? req.user : "0");
});

module.exports = router;
