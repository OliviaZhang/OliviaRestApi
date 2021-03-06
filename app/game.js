var Game = require('./models/game');
var dbUtils = require('../utils-module').Db;

module.exports = function(app) {
    var express = require('express');
    var router = express.Router();
    /*var game = {
        system: {
            objectA {
                a1: 0,
                a2: 1,
                a3: 119,
                a4: 1,
                a5: 1,
                a6: 1
            },
            attr1: 0,
            objectB: {
                b1: [
                ],
                b2: 110,
                b3: 1,
                b4: -1
            },
            attr2: 10000,
            objectC: {
                c1: 0,
                c2: 818,
                c3: 0
            },
            attr3: "attr3-value",
            attr4: 8110
            attr5: "attr5-value",
            objectD: [
                {
                    d1: 0,
                    d2: "d2-value",
                    d3: 8111,
                    d4: 0
                }
            ]
        }
    };*/
    router.get('/data', function(req, res) {
        res.json("sss");
    })
    router.post('/save', function(req, res) {
    	var game = new Game(req.body);

    	dbUtils.saveToDb(game);
        res.json(game);
    });

    app.use('/game', router);
}
