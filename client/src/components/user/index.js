var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('../database/index.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/groceries',(req, res) => {
  database.selectAll((err, results) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.status(200).json(results);
    }
  })
})


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
