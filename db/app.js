var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var user = require ("./routes/students.js");
var app = express();
app.use(function(req,res,next)
	{
		res.set("Access-Control-Allow-Origin","*");
		next();
	});
app.use(parser.json());
app.use(parser.urlencoded({
extended:true
}));
app.use(user);
app.listen(8000,
function(){
console.log("Listen at 8000");
}
	);
