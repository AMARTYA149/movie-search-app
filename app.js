var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req,res){
    //res.send("Hello, listen");
    request("http://www.omdbapi.com/?s=california&apikey=thewdb", function(error, response, body){
      if(!error && response.statusCode == 200){
          var results = JSON.parse(body);
          res.send(results["Search"][0]["Title"]);
      }
    });
});


app.listen(8000, function(){
    console.log("Movie app has started!!");
});