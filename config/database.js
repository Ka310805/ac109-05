const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:ka310805@fiaptecnico.g4zhz.mongodb.net/crud')
}

module.exports = conexao

//mongodb+srv://userAdmin:tom110606@fiaptecnico.4xniq.mongodb.net/crud