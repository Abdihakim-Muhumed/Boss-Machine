const express = require('express');
const apiRouter = express.Router();
const ideasRouter = require('./ideas.js')
const meetingsRouter = require('./meetings.js')
const minionsRouter = require('./minions.js')

//setting routers
apiRouter.use('/ideas', ideasRouter)
apiRouter.use('/meetings', meetingsRouter)
apiRouter.use('/minions', minionsRouter)

module.exports = apiRouter;
