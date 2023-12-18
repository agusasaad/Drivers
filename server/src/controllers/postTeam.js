const { Team } = require("../db");

const postTeam = async (req, res) => {
    try {
    const {name} = req.body;
    const newTeam = await Team.create({name})
    res.status(200).json(newTeam) 
    } catch (error) {
        res.send(error.message)
    }

}

module.exports = postTeam