import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // server like kaha se resoures hm aaplo de (give(request) me filename)
 res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  // request information from the frontend
  const numLetter = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs",{
    mynamelength: numLetter
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
