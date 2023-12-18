const db = require('../../api/db.json')
const axios = require('axios')

axios.get('http://localhost:5000/drivers').then((result) => {
    console.log(result.data)
})