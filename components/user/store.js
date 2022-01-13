const Model = require('./model');

function addUser(user){
    const myUsuer = new Model(user);
    return myUsuer.save();
}

function listUsers(){
    return Model.find();
}

module.exports = {
    add: addUser,
    list: listUsers,
}