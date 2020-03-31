//Criando a conexão com a base de dados
const connection = require('../database/connection');
//Utilizando o múdo de criptografia.
const crypto = require('crypto'); 

//Módulo de criação da Ong na aplicação.
module.exports = {
    //Função criada para retornar os dados na index após a criação da ONG.
    async index (request, response)
    {   
        //Criação de variável para retornar os dados do banco de dados com a opção Select *
        const ongs = await connection ('ongs').select('*');
        return response.json(ongs);
    },
    //Função para criar uma Ong na aplicação.
    async create(request, response)
    {
        const  {name, email, whatsapp, city, uf} = request.body; // Desta forma retorna o corpo da requisição.
        const id = crypto.randomBytes(4).toString('HEX');
        //Realiza a inserção dos dados no banco de dados.
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({id}); //Retorna o ID da ONG cadastrada na aplicação.
    }
};