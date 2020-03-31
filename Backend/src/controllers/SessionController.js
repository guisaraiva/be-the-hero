//Criando a conexão com a base de dados
const connection = require('../database/connection');

//Módulo responsável por validar o login da ONG que está tentando acessar o sistema.
module.exports = {
    async create(request, response){
        const { id } = request.body;
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        if (!ong) {
            return response.status(400).json({error:'Não encontramos a ONG com este ID'});
        }
        return response.json(ong);
    }

} 