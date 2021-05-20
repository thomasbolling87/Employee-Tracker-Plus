const router = require('inquirer').Router();
const Tracker = require('../api/Tracker');

router.get('/', (req, res) => {
    Tracker.findAll().then((trackData) => {
        res.json(trackData);
    });
});

router.get