var express = require("express");
var http = require("http");
var app = express();

//set view directory
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/index", function(req,res) {
  res.render("index")
  // res.end("This is the index page");
});

app.get("/index/:date", function(req, res) {

  //capture date from parameter
  var result = req.params.date;
  var parsedResult = parseInt(result);
  
  var myDate;
  var unixDate;
  var naturalDate;
  var month;
  
  //processing input
  //if input is not a number
  if (isNaN(parsedResult)) {
    unixDate = new Date(result);
    //if date.parse returns is not a number
    if (isNaN(unixDate)) {
      unixDate = null;
      naturalDate = null;
    } else {
      month = outputMonth(unixDate);
      var naturalDate = month + " " + unixDate.getDate() + "," + unixDate.getFullYear();
    }
  } else {
    unixDate = new Date(parsedResult);
    month = outputMonth(unixDate);
    naturalDate = month + " " + unixDate.getDate() + "," + unixDate.getFullYear();
  }
  
  //send response, end response
  res.json({"unix":unixDate,"natural":naturalDate});
  res.end();
});

app.get("*", function(request, response) {
  response.end("404!");
});

function outputMonth(dateInput) {
  
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

app.listen(process.env.PORT)