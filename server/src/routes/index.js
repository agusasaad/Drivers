const { Router } = require("express");
const postDriver = require("../controllers/postDriver");
const postTeam = require('../controllers/postTeam')

const router = Router();

router.post('/drivers', postDriver)
router.post('/teams', postTeam)
router.get('/drivers', getDrivers)
module.exports = router;
