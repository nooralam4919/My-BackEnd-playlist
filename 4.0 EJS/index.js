import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { pathToFileURL } from "url";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.post()



app.listen(port, (req, res) => {
    res.send(`Server is running on port ${port}`);
})