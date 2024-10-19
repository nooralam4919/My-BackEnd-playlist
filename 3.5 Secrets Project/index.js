//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming



import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended: true }));
//                  or 
// you can use express middleware (import bodyParser from "body-parser";)
app.use(express.urlencoded({ extended: true }));

var userIsAuthorised = false;

function passwordCheck(req, res, next){
    const password = req.body["password"];
    console.log(password);
    if(password == "nooralamansari")
    {
        userIsAuthorised = true;
    }
    next();
};

app.use(passwordCheck);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    // res.sendFile(__dirname + 'public/services.html');
});

app.post("/check", (req, res) => {
    // console.log(req.body);
    if(userIsAuthorised)
        res.sendFile(__dirname + "/public/secret.html");
    else
    res.sendFile(__dirname + "/public/index.html");
    // res.send("<h1> pelease enter password corectly </h1>")
  });






app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})
