var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();
var db = mongojs("rc",["students"]);
router.post("/students",function(req,res){
	if(req.body){
		db.students.insert(req.body,function(err,result)
{
	if(err){ res.status(404).send("error");
				console.log("Error");
}
	else {res.status(200).send(result);
				console.log("ok");
	}
}
			);
	}

}


	);


router.post("/filterUser",function(req,res){
	if(req.body){
		
		db.user.find(req.body,function(err,result)
{
	if(err){ res.status(404).send("error");
				console.log("Error");
}
	else {res.status(200).send(result);
				console.log(result);
	}
}
			);
	}

}


	);
router.get("/students/:roll",function(req,res){
	var form = {};
	form.roll = req.params.roll;
	console.log(req.params.roll);
			db.students.find(form,function(err,result){
				if(err) res.status(400).send("error");
				else res.status(200).send(result);
			});
});

router.get("/students",function(req,res){
			db.students.find({},function(err,result){
				if(err) res.status(404).send("error");
				else res.status(200).send(result);
			});
});
router.delete("/students/:roll",function(req,res){
	var form ={};
	form.roll = req.params.roll;
	db.students.remove(form,function(err,result){
		if(err) res.status(404).send("error");
		else res.status(200).send("Delete");
	});
});
router.get("/student", function(req,res) {
  db.students.find({},{projection:{Name: 1}},function(err,result){
  	if(err) res.status(404).send("error");
  	else res.status(200).send("error");
  })
});
module.exports = router;

