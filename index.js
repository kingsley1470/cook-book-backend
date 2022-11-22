const express = require('express');
const app = express();
const fileSystem = require('fs');
const port = 3030;
const axios = require('axios');
const path = require('path');

const filePath = path.join(process.cwd(), "receipes.json")

app.get('/receipes', (req, res) => {
  console.log('receipes')
  fileSystem.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      res.send(data)
    }
  })});

fileSystem.writeFile('receipes.txt', 'This is the first receipe', (err) =>{
  if(err) {
    console.log(err)
  } else{
    console.log("Done")
  }
})

fileSystem.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})

app.listen(port,()=>{
  console.log(`Server running http://localhost:${port}/`);
});