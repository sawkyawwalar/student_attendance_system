var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();
var db = mongojs("mongodb://krost7200:indigowizardfourth4@ds143594.mlab.com:43594/rc",["students"]);
router.post("/students",function(req,res){
	var form = {};
	form = req.body;
	
	if(req.body){
		console.log(form);
		db.students.insert(form,function(err,result)
{
	if(err){ res.status(404).send("error");
				console.log(err);
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
router.get("/students/:mail",function(req,res){
	var form = {};
	form.mail = req.params.mail;
	console.log(req.params.mail);
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
router.post("/matchStudents",function(req,res){
	var form={};
	form.Name = req.params.Name;
	if(req.body){
		console.log(req.body);
		db.students.find(req.body,function(err,result)
{
	if(err){ res.status(404).send("error");
				console.log("Error");
}
	else  res.status(200).send(result);
	
}
			);
	}

}


	);
router.patch("/updateStudents/:mail/:sub/:pro",function(req,res){
	var form = req.body;
	var name =req.params.sub;
	var da = req.params.pro;
	

	if(req.body){
			 db.students.update(form, 
    { $set:{ [name]:da } },function(err,result){
    	if(err) console.log("false");
    	else console.log("true");
    }); }
});
module.exports = router;
