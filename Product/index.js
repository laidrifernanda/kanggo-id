const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

//IMPORT KEYS CONFIG
const db = require("./config/keys").mongoURI;
//Connect to DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

const productroutes = require("./routes/product");
app.use("/product", productroutes);

app.listen(PORT, () => console.log(`Server runing on PORT: ${PORT}`));
