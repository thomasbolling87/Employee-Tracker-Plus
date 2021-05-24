// Adding in required dependencies for the api routes that will be using inquirer
const router = require('express').Router();
const apiRoutes = require('.api');

// Informing the app to use the apiRoutes in the api folder
router.use('/api', apiRoutes);

moudule.exports = router;