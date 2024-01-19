const { Router } = require("express");
const postDriver = require("../controllers/postDriver");
const getAllDrivers = require("../controllers/getAllDrivers");
const getTeam = require("../controllers/getTeam");
const getDriverById = require("../controllers/getDriverById");
const getDriverByName = require("../controllers/getDriverByName");
const postTeams = require("../controllers/postTeam")

const router = Router();

router.get('/drivers', getAllDrivers)
router.get('/drivers/name', getDriverByName)
router.get('/drivers/:id', getDriverById)
router.post('/drivers', postDriver)
router.post('/createteams', postTeams )
router.get('/teams', getTeam)
module.exports = router;

