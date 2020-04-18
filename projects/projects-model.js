const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getProjectById,
    getResources,
    getTasks,
    addProject,
    addResource, 
    addTask
}

function getProjects(){
    return db('projects')
}
function getProjectById(id){
    return db('projects').where({id});
}
function addProject(project){
    return db('projects').insert(project)
}
function getResources(){
    return db('resources')
}
function addResource(resource){
    return db('resources').insert(resource)
}
function getTasks(project_id){
    return db('tasks').where({'tasks.project_id':project_id})
}
function addTask(task){
    return db('tasks').insert(task)
}