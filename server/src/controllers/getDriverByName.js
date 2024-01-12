const axios = require('axios');
const { Driver } = require("../db");
const { Op } = require('sequelize');

const getDriverByName = async (req, res) => {
    try {
        const { name } = req.query;

        const { data } = await axios.get(`http://localhost:5000/drivers`);

        const firstsNamesByApi = data.filter((driver) =>
            driver.name.forename.substring(0, name.length).toLowerCase() === name.toLowerCase())

        const noCapitalLetters = name.toLowerCase()

        const firstsNamesByDB = await Driver.findAll({
            where: {
                name: {
                    [Op.iLike]: `${noCapitalLetters}%`, 
                },
            },
            order: [['name', 'ASC']]
        })

        const allDrivers = [...firstsNamesByDB, ...firstsNamesByApi].slice(0, 15)

        if (allDrivers.length === 0) return res.status(404).send('Nose encontro un nigun driver con ese nombre')

        res.status(200).json(allDrivers)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

module.exports = getDriverByName

