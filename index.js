const express = require('express');
const app = express();
const fileSystem = require('fs');
const port = 3030;
const axios = require('axios');
const path = require('path');
// app.get('/receipslist', (req, res) =>{
//     axios.get('http://jsonplaceholder.typicode.com/posts/1')
//     .then(response =>{
//         let package = JSON.stringify(response.data)
//         console.log(package)
//         fileSystem.writeFile('receipes.json', package, function (err) {
//             console.log(err);
//             res.send("Success")
//         })
//     })
//     .catch(err=>console.log(err))
// })
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

// https://axios-http.com/docs/intro

// https://www.geeksforgeeks.org/node-js-fs-writefile-method/

// https://medium.com/geekculture/nodejs-express-axios-and-the-basic-set-up-fe88a0b75dca

// https://stackoverflow.com/questions/61045897/write-a-file-based-on-axios-response