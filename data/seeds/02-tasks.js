exports.seed = function(knex) {
    return knex('tasks').insert([
      {task_name: 'Roll balls of snow',
        task_description: 'Collect snow from the ground and roll into 3 large spheres.',
        project_id: 1
    },
        
    {task_name: 'Stack balls of snow and decorate',
    task_description: 'Stack your 3 balls of snow and decorate to make it look like a snowman.',
    project_id: 1
},

{task_name: 'Preheat oven to 350',
        task_description: 'Turn on oven and set it to 350 degrees.',
        project_id: 2
    },

    {task_name: 'Mix cake ingredients together',
        task_description: 'Follow your favorite Pinterest recipe for this part.',
        project_id: 2
    },
    
    {task_name: 'Bake cake and enjoy!',
        task_description: 'After baking the cake for the required time, remove from oven and eat a slice.',
        project_id: 2
    }
    ]);
  };