module.exports = app => {
    const controller = require('../controllers/player')
    console.log(controller)
    app.route('/jugadores')
       .get(controller.readAllPlayers)
       .post(controller.createPlayer)
       .delete(controller.deleteAllPlayers)
}