//Criando a conexão com a base de dados
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        // Criação de variáveis
        const {page = 1} = request.query;
        const [count] = await connection('incidents').count(); 
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id','=','incidents.ong_id')
            .limit(5)
            .offset((page-1)*5)
            .select([
                    'incidents.*',
                    'ongs.name',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf']);
        
        //Retorno da quantidade de casos cadastrados na aplicação.
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    //Função para criar as informações no banco
    async create(request, response) {
        //Criação de variáveis
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({ //Método insert para realizar inserção no banco.
            title,
            description,
            value,
            ong_id,
        });
        return response.json({id});
    },
    
    //Função para deletar as informações do banco.
    async delete(request, response){
        //Criação de variáveis.
        const {id} = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operação não permitida!'})
        }
        //Realiza a exclusão do registro passando como parâmetro o id do caso.    
        await connection('incidents').where('id', id).delete();
        // Retorna status code 204 
        return response.status(204).send();
    }
};