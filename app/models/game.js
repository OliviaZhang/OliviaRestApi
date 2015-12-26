var mongoose     = require('mongoose');
var Schema = mongoose.Schema;
var gameSchema = new Schema({
    system: {
        objectA: {
            a1: Number,
            a2: Number,
            a3: Number,
            a4: Number,
            a5: Number,
            a6: Number
        },
        attr1: Number,
        objectB: {
            b1: [
            ],
            b2: Number,
            b3: Number,
            b4: Number
        },
        attr2: Number,
        objectC: {
            c1: Number,
            c2: Number,
            c3: Number
        },
        attr3: String,
        attr4: Number,
        attr5: String,
        objectD: [
            {
                d1: Number,
                d2: String,
                d3: Number,
                d4: Number
            }
        ]
    }
}, {collection: 'game'});

module.exports = mongoose.model('Game', gameSchema);
