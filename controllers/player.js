const mongoose = require('mongoose')
const Player = require('../models/player')

exports.createPlayer = (req,res) => {
    let player = req.body

    const nationalities = [
        'argentino',
        'brasilero',
        'chileno',
        'paraguayo',
        'uruguayo',
        'peruano',
        'colombiano',
        'venezolano',
        'boliviano'

    ]

    const playerTypes = {
        name: typeof player.name === 'string' && player.name !== '',
        lastname: typeof player.lastname === 'string' && player.lastname !== '',
        age: typeof player.age === 'number' && player.age > 4 &&  player.age < 60,
        nationality: typeof player.nationality === 'string' && nationalities.includes(player.nationality),
        number: typeof player.number === 'number'


    }
    if(Object.values(playerTypes).every(e => e)){
        const persistentPlayer = new Player({
            _id : new mongoose.Types.ObjectId(),
            name : player.name,
            lastname : player.lastname,
            age : player.age,
            nationality : player.nationality,
            number : player.number
        })

        persistentPlayer.save((err,player) => {
            if(err) res.send(err)
            res.status(200).json(persistentPlayer)
        })

    }else{
        res.status(200).json({message: 'Bad attributes!'})
    }
    
}

exports.readAllPlayers = (req,res) => {
    Player.find({},(err, players) => {
        if(err) res.send(err)
        res.json(players)
    })
}


exports.deleteAllPlayers = (req,res) => {
    Player.deleteMany(
        {},
        (err) => {
            if(err) res.send(err)
            res.status(200).json({message: 'All players were successfully deleted!'})
        }
    )
}