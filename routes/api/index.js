const router = require('express').Router();
const userRoute = require('./user-route');
const thoughtsRoute = require('./thoughts-route');

router.use('/users', userRoute);
router.use('/thoughts', thoughtsRoute);

module.exports = router;