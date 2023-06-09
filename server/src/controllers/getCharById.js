const axios = require('axios');
const URL = "http://rickandmortyapi.com/api/character/";
//AsyncAwait
module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(URL + id);
        const {status, name, species, origin, image, gender } = response.data;
        const character = {id, status, name,species,origin,image,gender}
        return name ? res.status(200).json(character) : res.status(404).send("not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//PROMISE
//module.exports = (req, res) => {
//    const { id } = req.params;
//    axios(URL + id)
//        .then(response => {
//            //destructuring
//            const {status, name, species, origin, image, gender } = response.data;
//            const character = {id, status, name,species,origin,image,gender}
//            return character.name ? res.status(200).json(character) : res.status(404).send("not found")
//        })
//        .catch(error => {
//            return res.status(500).send(error.message);
//        })
//         
//
//}
