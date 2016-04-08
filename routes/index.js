var models = require("../models");

exports.view = function(req, res) {
	models.Message.find().exec(renderMessage);

	function renderMessage(err, message){
		if(err)
			return handleError(err);
		res.render("index", {"data": message});
	}
    //var data = {data: []};
    //res.render("index", data);
}


