const express = require('express');
const app = express();
const fileSystem = require('fs');
const port = 3030;
const axios = require('axios');
const path = require('path');
const recipes = require('./receipes.json')
let bodyParser = require('body-parser')
const data = require("./receipes.json")
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
  fileSystem.readFile(filePath,"utf8" ,(err, data) => {
    if (err) {
      console.log(err)
    } else {
      let sampleData = JSON.parse(data);
      console.log("recipes from json file", sampleData["receipes"])
      res.send(sampleData["receipes"])

    }
  })
});

app.get('/receipes/:id',async (req, res) => {
  let id = req.params.id;
  console.log("id is ", id)
  let recipe;   

  //    --- usig filter method 
  //  let recipeList=data["receipes"];
  //  recipe = recipeList.filter(recipe => recipe.recipeId.toString() === id );
 
  
  fileSystem.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let sampleData = JSON.parse(data);
      let array = sampleData["receipes"];
      
      array.map(element => {
        console.log("element id ", element.recipeId)
        if (element.recipeId.toString() === id) {
          recipe = element;
        }
      })
      res.send(recipe);
    }
  })
});

fileSystem.writeFile('receipes.txt', 'This is the first receipe', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Done")
  }
})

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}/`);
});

// https://axios-http.com/docs/intro

// https://www.geeksforgeeks.org/node-js-fs-writefile-method/

// https://medium.com/geekculture/nodejs-express-axios-and-the-basic-set-up-fe88a0b75dca

// https://stackoverflow.com/questions/61045897/write-a-file-based-on-axios-response