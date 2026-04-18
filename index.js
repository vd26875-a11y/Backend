require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/facebook", (req,res)=>{
    res.send("You run the code seccussfully")
})

app.get("/insta", (req, res)=>{
    res.send("Welcome insta ")
})

app.get("/PlayStation", (req,res)=>{
    res.send("<h1>God of War</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
