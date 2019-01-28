const Player = require('../models/player.model');

exports.test = function (request, response){
	response.send('reposta do controller');
}

exports.createPlayer = function (request, response){
	let player = new Player(
		{
			name: request.body.name,
			score: 0
		}
	)
	
	player.save(function (err) {
		if(err){
			return next(err);
		}
		response.send('Player created successfully');
	})
}

exports.findPlayer = function (request, response) {
	Player.findOne({name:request.params.name}, function (err, player) {
		if(err) return next(err);
		response.send(player);
	})
}

exports.updatePlayer = function (request, response) {
	Player.findOneAndUpdate(request.params.id, {$set: request.body},
		function (err, player) {
			if(err) return next(err);
			response.send('Player updated');
		})
}

exports.deletePlayer = function (request, response) {
	Player.findOneAndRemove(request.params.id, function (err){
		if (err) return next(err);
		response.send('Player Deleted successfully');
	})
}