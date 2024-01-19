const { Team } = require("../db");

const createTeam = async (req, res) => {
    try {
        const {name} = req.body;

        const existingTeam = await Team.findOne({
            where: {
                name,
            },
        });

        if(existingTeam){
            return res.json({ error: 'Ya existe un driver con ese team' });
        }

        const newTeam = await Team.create({ name });

        res.status(200).json({ message: 'El driver se creó correctamente', newTeam });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = createTeam