
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 255)
        .notNullable()
        .unique();
      tbl.string('project_description', 255);
      tbl.boolean('project_status').defaultTo('false');
    })

    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_name', 255)
          .notNullable();
        tbl.string('task_description', 255)
            .notNullable();
        tbl.string('task_notes', 255);
        tbl.boolean('task_status').defaultTo('false');
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 255)
            .notNullable()
            .unique();
        tbl.string('resource_description', 255);
    })

      .createTable('projects-resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects-resources');
};
