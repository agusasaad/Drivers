const { Driver, Team } = require("../db");

const postDriver = async (req, res) => {
    try {
        const { name, lastName, description, image, nationality, dob, teamIds } = req.body;

        const existingDriver = await Driver.findOne({
            where: {
                name,
                lastName,
            },
        });

        if (existingDriver) {
            return res.json({ error: 'Ya existe un driver con ese nombre y apellido', code: 'driver_exists' });
        }

        const newDriver = await Driver.create({ name, lastName, description, image, nationality, dob });

        if (teamIds && Array.isArray(teamIds)) {
            const teams = await Team.findAll({
                where: {
                    id: teamIds,
                },
            });

            await newDriver.addTeams(teams);
        }

        res.status(200).json({ message: 'El driver se creó correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = postDriver;
