var data = require("../data.json");

exports.addFriend = function(req, res) {
	var name = req.query.name
	var desc = req.query.description
	var newFriend = {
			"name": name,
			"description": desc,
			"imageURL": "http://lorempixel.com/400/400/people"			
		}
	data["friends"].push(newFriend);
	console.log(data);
	res.render('add');
}