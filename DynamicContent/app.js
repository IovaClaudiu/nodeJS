const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

const adminData = require("./routes/admin.js");
const shopRouters = require("./routes/shop.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminData.routes);
app.use(shopRouters);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found!" });
});

app.listen(3000);
