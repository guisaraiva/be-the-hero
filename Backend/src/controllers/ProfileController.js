//Criando a conexão com a base de dados
const connection = require('../database/connection');
//Módulo responsável para validar a ONG logada na aplicação e retorna os casos da respectiva ONG
module.exports = {
    async index(request, response){

        const ong_id = request.headers.authorization;
        const incidents  = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');
        return response.json(incidents);
    }
}