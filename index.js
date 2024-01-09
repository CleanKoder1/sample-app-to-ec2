const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const port = 8080;

app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).json({
    data: null,
    message: "Successfully retrieved data",
    success: true,
  });
});

server.listen(port, () => {
  console.log("Server is listening in port " + port);
});
