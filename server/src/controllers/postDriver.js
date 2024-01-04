const { Driver} = require("../db");

const postDriver = async (req, res) => {
    try {
    const {name, lastName, description, image, nationality, dob, teamId} = req.body; 

    const newDriver = await Driver.create({name, lastName, description, image, nationality, dob})

    await newDriver.addTeam(teamId) 

    res.status(200).json({message: 'El driver se creó correctamente' });

    } catch (error) {
        res.send(error.message)
    }

}

module.exports = postDriver