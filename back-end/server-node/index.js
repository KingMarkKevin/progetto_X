const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

mongo.connect('mongodb+srv://kevin-king:5Bn7Zrw89q5zJYJj@cluster0.zuvcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')