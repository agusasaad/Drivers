const axios = require('axios');


const getDriverById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get('http://localhost:3001/drivers');

        const filterByApi = data.find(driver => driver.id == id)

        if (!filterByApi) {
            return res.status(404).json({ error: 'Driver no encontrado en la API.' });
        }

        const {name, lastName, nationality, birthdate, image, description, dob, teams, number, driverRef, code, url } = filterByApi;

        res.json({name, lastName, nationality, birthdate, image, description, dob, teams, number, driverRef, code, url })
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = getDriverById