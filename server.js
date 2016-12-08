var express = require("express");
var app = express();
contacts = []

app.use(express.bodyParser());

var posts = []

app.get('/contacts',function(req,res){
  res.send(contacts)
});

app.post('/contacts', function(req,res){
  var id = contacts.length + 1;
  var name = req.body.title;
  var contact = {id:id, name:name}
  contacts.push(contact);
  res.send(contacts);
});

app.put('/contacts/:id', function(req,res){
  var id = req.params.id;
  contacts[id-1].title = req.body.name;
  res.send(contacts[id-1]);
});

app.delete('/contacts/:id', function(req,res){
  var id = req.params.id;
  contact = contacts.splice(id-1,1)
  res.send("The post was removed");
});

app.listen(3000);
console.log("Application is running in http://localhost:3000");