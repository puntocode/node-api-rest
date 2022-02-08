const { response } = require('express');

const index = (req, res = response) => {
    const {nombre, apikey, page = 1} = req.query; //destructurar ?nombre=fede&page=10

    res.json({
        msg: 'get Users',
        page,
        nombre
    })
}

const store = (req, res = response) => {
    const { nombre, edad } = req.body;
    
    res.status(201).json({
        msg: 'store Users',
        nombre,
        edad
    })
}

const update = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'update Users',
        id
    })
}

const deleteUser = (req, res = response) => {
    res.json({
        msg: 'delete Users'
    })
}

const patch = (req, res = response) => {
    res.json({
        msg: 'patch Users'
    })
}



module.exports = { index, store, update, deleteUser, patch}