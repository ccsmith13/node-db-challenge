exports.seed = function(knex) {
    return knex('resources').insert([
      {resource_name: 'Oven'},
      {resource_name: 'Cake Ingredients'},
      {resource_name: 'Snow'},
      {resource_name: 'Baking Pan'},
      {resource_name: 'Plate'},
      {resource_name: 'Scarf'},
      {resource_name: 'Coal'},
      {resource_name: 'Mittens'},
      {resource_name: 'Pipe'},
    ]);
};