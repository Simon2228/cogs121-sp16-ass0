var models = require("../models.js");

exports.send = function(req, res){
	//console.log(req.body);
	if(req.body.email && req.body.content){
		var message = new models.Message({
			email: req.body.email,
			content: req.body.content,
			created: new Date().getDate()
		});

		message.save(function(err){
			if(err)
				return handleError(err);
			res.redirect("..");
		});
	}

	else{
		//alert("Please fill in both email and content");
		res.redirect("..");
	}

	//window.location.href = "/";
};