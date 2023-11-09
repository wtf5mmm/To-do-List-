


import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url"; 
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public")); // public folder
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [""];
app.get("/" , (req,res)=>{
res.render("index.ejs", {tasks});
});


app.post("/submit", (req,res)=>{
   const newTask = req.body.task;
   tasks.push(newTask);
   res.redirect('/');
});



app.listen(port , ()=>{
    console.log(`Server is running on ${port}`);
});