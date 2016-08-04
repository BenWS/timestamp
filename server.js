var express = require("express");
var http = require("http");
var app = express();

app.all("*", function(req, res, next) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/index/:date", function(req, res) {

  var result = req.params.date;
  var myDate = new Date(result);
  
  var month = chooseMonth(myDate);
  
  //if valid date
  if (!isNaN(Date.parse(myDate))) {
      var unixDate = Date.parse(myDate);
      var naturalDate = month + " " + myDate.getDate() + "," + myDate.getFullYear();
  //if not valid date
  } else {
      unixDate = null;
      naturalDate = null;
  }  
  
  res.json({"unix":unixDate,"natural":naturalDate});
  res.end();
});

app.get("*", function(request, response) {
  response.end("404!");
});

function chooseMonth(dateInput) {
  
  var month;
  
  switch(dateInput.getMonth()) {
      case 0:
          month = "January";
          break;
      case 1:
          month = "February";
          break;
      case 2:
          month = "March";
          break;
      case 3:
          month = "April";
          break;
      case 4:
          month = "May";
          break;
      case 5:
          month = "June";
          break;
      case 6:
          month = "July";
          break;
      case 7:
          month = "August";
          break;
      case 8:
          month = "September";
          break;
      case 9:
          month = "October";
          break;
      case 10:
          month = "November";
          break;
      case 11:
          month = "December";
          break;
  }
  
  return month;
  
}

app.listen(8080);