const axios = require('axios');
const { Team } = require("../db");


const getTeams = async (req, res) => {
    try {
        const { data } = await axios.get('http://localhost:5000/drivers');

        const teamsNoRepeated = new Set(data.flatMap(driver => (driver.teams ? driver.teams.split(',').map(team => team.trim()) : [])).map(team => team.toLowerCase()));

        const teamTable = await Team.count()

        if(teamTable === 0){
            for (const teamName of teamsNoRepeated) {
                await Team.create({name : teamName})
            }
        }
        
        const allTeams = await Team.findAll()

        res.status(200).json(allTeams)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


module.exports = getTeams;






