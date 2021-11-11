const users = require("./routes/users");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//SERVER LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on PORT: ${PORT}`));

//IMPORT KEYS CONFIG
const db = require("./config/keys").mongoURI;
//Connect to DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

//ROUTE APIs
app.use("/users", users);
