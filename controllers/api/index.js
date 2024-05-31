const router = require('express').Router();
const postDataRoute = require('./postDataRoutes');
const userDataRoute = require('./userDataRoutes');

router.use('/user', userDataRoute);
router.use('/post', postDataRoute);

module.exports = router;