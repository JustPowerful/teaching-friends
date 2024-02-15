const express = require("express"); // remarque
const app = express();

app.set("view engine", "ejs");

app.get("/home", function (req, res) {
  let x = 1000 / 2;
  res.render("index.ejs", { result: x });
});

const PORT = 3000; // > 1024
app.listen(PORT);
