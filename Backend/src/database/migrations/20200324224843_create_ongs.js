//Função responsável pela criação da tabela de Ongs.
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table)
    {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });
};
//Função para exportar e realizar a criação da tabela no banco de dados SQLite.
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};