const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ status: "ok", service: "Emaily server" });
});

app.get("/hello", (req, res) => {
  res.send({ hi: "There" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
