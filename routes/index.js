var router = require('express').Router();

var pollController = require('../controllers/pollController');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
// 	console.log('Time: ', Date.now())
// 	next()
// })

// define the home page route
router.get('/', pollController.homePage);
router.get('/:id', pollController.pollDetail);
router.get('/new-poll', pollController.newPollForm);
router.post('/new-poll', pollController.addNewPoll);

module.exports = router;
