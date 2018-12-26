var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();
var db = mongojs("mongodb://krost7200:indigowizardfourth4@ds143594.mlab.com:43594/rc",["subj"]);
router.post("/subject",function(req,res){
	if(req.body){
		db.subj.insert(req.body,function(err,result)
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



router.get("/subject/:sname",function(req,res){
	var form = {};
	form.sname = req.params.sname;
	console.log(req.params.sname);
			db.subj.find(form,function(err,result){
				if(err) res.status(400).send("error");
				else res.status(200).send(result);
			});
});


router.delete("/subject/:sname",function(req,res){
	var form ={};
	form.sname = req.params.sname;
	db.subj.remove(form,function(err,result){
		if(err) res.status(404).send("error");
		else res.status(200).send("Delete");
	});
});

module.exports = router;
