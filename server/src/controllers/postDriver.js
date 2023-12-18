const { Driver} = require("../db");

const postDriver = async (req, res) => {
    try {
    const {name, lastName, description, image, nationality, birthdate} = req.body;
    const newDriver = await Driver.create({name, lastName, description, image, nationality, birthdate})
    res.status(200).json(newDriver) 
    } catch (error) {
        res.send(error.message)
    }

}

module.exports = postDriver