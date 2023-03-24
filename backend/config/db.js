const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db('myproject');

 
  client.close();
});