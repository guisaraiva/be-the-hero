const connection = require('../database/connection');
const crypto = require('crypto'); //criptografia
module.exports = {

    async index (request, response)
    {
        const ongs = await connection ('ongs').select('*');
        return response.json(ongs);
    },
 
    async create(request, response)
    {
        const  {name, email, whatsapp, city, uf} = request.body; // Desta forma retorna o corpo da requisição.
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        //console.log(data); // Exibe no console a informação da URL
        //return response.send('Hello Word !!')
        return response.json({id});
    }
};