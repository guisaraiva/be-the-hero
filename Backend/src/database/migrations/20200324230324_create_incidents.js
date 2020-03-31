//Função responsável pela criação da tabela que armazena os incidents.
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable(); //Definindo o relacionamento da tabela
        table.foreign('ong_id').references('id').inTable('ongs'); // Definindo a chave estrangeira
    });
};

//Função para exportar e realizar a criação da tabela no banco de dados SQLite.
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
