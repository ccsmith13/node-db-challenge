exports.seed = function(knex) {
    return knex('projects').insert([
      {project_name: 'How to Build a Snowman',
        project_description: 'Build a loveable snowman named Frosty'},
        
        {project_name: 'How to Bake a Cake',
        project_description: 'Learn how to make a delicious chocolate cake'}
    ]);
  };