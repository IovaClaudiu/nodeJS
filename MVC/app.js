const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.set("view engine", "ejs");

const adminRoutes = require("./routes/admin.js");
const shopRouters = require("./routes/shop.js");
const errorController = require("./controllers/error");

// For parsing the body
app.use(bodyParser.urlencoded({ extended: false }));

// For managing the public folder that constaincs custom CSS, imgs, etc.
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRouters);
app.use(errorController.get404);

app.listen(3000);
