const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
    Projects.getProjects()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    Projects.getProjectById(id)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project with given id' });
    });
  });

  router.get('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;
    Projects.getTasks(id)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

  router.post('/projects', (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
    .then(results => {
      res.status(201).json(results);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

  router.post('/resources', (req, res) => {
    const resourceData = req.body;
  
    Projects.addResource(resourceData)
    .then(results => {
      res.status(201).json(results);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

  router.post('/projects/:id/tasks', (req, res) => {
    const taskData = req.body;
  
    Projects.addTask(taskData)
    .then(results => {
      res.status(201).json(results);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

  module.exports = router;