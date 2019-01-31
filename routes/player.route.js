const express = require('express');
const router = express.Router();

const playerController = require('../controllers/player.controller');

router.get('/test', playerController.test);

router.get('/:name', playerController.findPlayer);

router.post('/create', playerController.createPlayer);

router.put('/:name/update', playerController.updatePlayer);

router.delete('/:id/delete', playerController.deletePlayer);

module.exports = router;