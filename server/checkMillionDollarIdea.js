const checkMillionDollarIdea = (req, res, next) => {
    if(! req.query[numWeeks] || !req.query[weeklyRevenue]){
        res.status(400).send()
    }
    if(typeof req.query.numWeeks != 'number' || typeof req.query.weeklyRevenue != 'number'){
        res.status(400).send()
    }
    const totalValue = req.query[numWeeks] * req.query[weeklyRevenue]
    if(totalValue < 1000000){
        res.status(400).send("Not a million idea")
    }
    next()
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
