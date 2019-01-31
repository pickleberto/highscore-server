const Player = require('../models/player.model');

exports.test = function (request, response){
	response.send('reposta do controller');
}

exports.createPlayer = function (request, response, next){
	let player = new Player(
		{
			name: request.body.name,
			score: request.body.score
		}
	)
	
	player.save(function (err) {
		if(err){
			return next(err);
		}
		response.send('Player created successfully');
	})
}

exports.findPlayer = function (request, response, next) {
	Player.findOne({name:request.params.name}, function (err, player) {
		if(err) return next(err);
		response.send(player);
	})
}

exports.updatePlayer = function (request, response, next) {
	Player.updateOne({name:request.params.name}, {$set: request.body},
		function (err, player) {
			if(err) return next(err);
			response.send('Player updated with id');
		})
}

exports.deletePlayer = function (request, response, next) {
	Player.findOneAndRemove(request.params.id, function (err){
		if (err) return next(err);
		response.send('Player Deleted successfully');
	})
}