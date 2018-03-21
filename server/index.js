var app = require('./config.js');

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening to Port ${port}!!!`);
});
