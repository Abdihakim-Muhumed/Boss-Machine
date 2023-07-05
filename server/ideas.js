const express = require('express')
const ideasRouter = express.Router()
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db.js')
// GET all ideas
ideasRouter.get('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas')
    res.send(ideas)
})
// GET idea by Id
ideasRouter.get('/:ideaId', (req, res) => {
    const idea = getFromDatabaseById('ideas', req.params.ideaId)
    if(idea){
        res.send(idea)
    }
    res.status(404).send()
})
//POST new idea.
ideasRouter.post('/', (req, res) => {
    const newIdea = addToDatabase('ideas', req.query)
    if(newIdea){
        res.status(201).send(newIdea)
    }
    res.status(400).send()
})
// Update a idea
ideasRouter.put('/:ideaId', (req, res) => {
    const idea = getFromDatabaseById('ideas', req.params.ideaId)
    Object.keys(req.query).forEach((key) => idea[key] = req.query[key])
    const updatedIdea = updateInstanceInDatabase('ideas', idea)
    if(updatedIdea){
        res.status(201).send(updatedIdea)
    }
    res.status(404).send()
})
//Delete a idea
ideasRouter.delete('/:ideaId', (req, res) => {
    const deleted = deleteFromDatabasebyId('ideas',req.params.ideaId)
    if(!deleted){
        res.status(404).send()
    }
    res.status(200).send('Idea deleted successfully!')
})

module.exports = ideasRouter