var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();
var db = mongojs("mongodb://krost7200:indigowizardfourth4@ds143594.mlab.com:43594/rc",["teacher"]);
router.post("/teacher",function(req,res){
	response.body
	if(req.body){
		db.teacher.insert(req.body,function(err,result)
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
		
		db.teacher.find(req.body,function(err,result)
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
router.get("/teacher/:mail",function(req,res){
	var form = {};
	form.mail = req.params.mail;
	console.log(req.params.mail);
			db.teacher.find(form,function(err,result){
				if(err) res.status(400).send("error");
				else res.status(200).send(result);
			});
});

router.get("/teacher",function(req,res){
			db.teacher.find({},function(err,result){
				if(err) res.status(404).send("error");
				else res.status(200).send(result);
			});
});
router.delete("/students/:roll",function(req,res){
	var form ={};
	form.roll = req.params.roll;
	db.teacher.remove(form,function(err,result){
		if(err) res.status(404).send("error");
		else res.status(200).send("Delete");
	});
});
router.post("/teacher",function(req,res){
	var form={};
	form.Name = req.params.Name;
	if(req.body){
		console.log(req.body);
		db.teacher.find(req.body,function(err,result)
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
router.patch("/teacher/:mail/:sub/:pro",function(req,res){
	var form = req.body;
	var name =req.params.sub;
	var da = req.params.pro;
	

	if(req.body){
			 db.teacher.update(form, 
    { $set:{ [name]:da } },function(err,result){
    	if(err) console.log("false");
    	else console.log("true");
    }); }
});
module.exports = router;
