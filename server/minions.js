const express = require('express')
const minionsRouter = express.Router()
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db.js')
// GET all minions
minionsRouter.get('/', (req, res, next) => {
    const minions = getAllFromDatabase('minions')
    res.send(minions)
})
// GET minion by Id
minionsRouter.get('/:minionId', (req, res) => {
    const minion = getFromDatabaseById('minions', req.params.minionId)
    if(minion){
        res.send(minion)
    }
    res.status(404).send()
})
//POST new minion.
minionsRouter.post('/', (req, res) => {
    const newMinion = addToDatabase('minions', req.query)
    if(newMinion){
        res.status(201).send(newMinion)
    }
    res.status(400).send()
})
// Update a minion
minionsRouter.put('/:minionId', (req, res) => {
    const minion = getFromDatabaseById('minions', req.params.minionId)
    Object.keys(req.query).forEach((key) => minion[key] = req.query[key])
    const updatedMinion = updateInstanceInDatabase('minions', minion)
    if(updatedMinion){
        res.status(201).send(updatedMinion)
    }
    res.status(404).send()
})
//Delete a minion
minionsRouter.delete('/:minionId', (req, res) => {
    const deleted = deleteFromDatabasebyId('minions',req.params.minionId)
    if(!deleted){
        res.status(404).send()
    }
    res.status(200).send('Minion deleted successfully!')
})
module.exports = minionsRouter;
