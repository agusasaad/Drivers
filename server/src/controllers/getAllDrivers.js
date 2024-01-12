const { Driver, Team } = require("../db");
const axios = require('axios')
const numeroRandom = (Math.floor(Math.random() * 100) + 1).toString();

const getAllDrivers = async (req, res) => {
    try {

        const { data } = await axios.get('http://localhost:5000/drivers');

        const newDriversApi = data.map(driver => ({
            ...driver,
            image: {
                url: driver.image?.url || 'https://cdn.motor1.com/images/mgl/O487B/s1/nuevo-logo-de-f1-2018.webp',
                imageby: driver.image?.imageby || 'Corredor de F1',
            },
            number: driver.number === '\\N' ?  numeroRandom : driver.number ,
            code: driver.code === '\\N' ?  'JEJE' : driver.code
        }))

        const newDriversDataBase = await Driver.findAll({
            include: [
                {
                    model: Team,
                    as: 'teams',
                },
            ],
        });

        const allDrivers = [...newDriversDataBase, ...newDriversApi]

        res.status(200).json(allDrivers);

    } catch (error) {

        res.status(404).json({ message: error.message })
    }
}

module.exports = getAllDrivers