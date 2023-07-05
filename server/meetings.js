const express = require('express')
const meetingsRouter = express.Router()
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db.js')

//GET all meetings
meetingsRouter.get('/', (req, res) => {
    const meetings = getAllFromDatabase('meetings');
    if(meetings){
        res.send(meetings)
    }
})

//POST a new meeting
meetingsRouter.post('/', (req, res) => {
    const meeting = createMeeting()
    const newMeeting = addToDatabase('meetings', meeting)
    if(!newMeeting){
        res.status(500).send()
    }
    res.status(201).send(newMeeting);
})

//DELETE all meetings
meetingsRouter.delete('/', (req, res) => {
    const deleted = deleteAllFromDatabase('meetings')
    if(!deleted){
        res.status(204).send()
    }
    res.status(200).send()
})

module.exports = meetingsRouter