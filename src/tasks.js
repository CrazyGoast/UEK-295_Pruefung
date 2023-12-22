const express = require('express');

const router = express.Router();

const { randomUUID } = require('node:crypto');

let Tasks = [
  { name: 'Clean my room', until: '30.12.2023', id: '1' },
  { name: 'Walk with the dog.', until: '23.12.2023', id: '2' },
];

router.get('/', (request, response) => {
  // #swagger.tags = ['Tasks']
  response.status(200).json(Tasks);
});

router.get('/tasks/:id', (request, response) => {
  // #swagger.tags = ['Tasks']
  const task = Tasks.find((task) => task.id === request.params.id);
  if (!Tasks) {
    response.status(404).json({ message: 'Task not found.' });
  } else {
    response.status(200).json(task);
  }
});

router.post('/', (request, response) => {
  // #swagger.tags = ['Tasks']
  const newTask = request.body;
  newTask.id = randomUUID();
  if (!newTask.name) {
    response.status(400).send('Pleas enter a Name.');
  } else {
    Tasks.push(newTask);
    response.status(201).json(Tasks);
  }
});

router.patch('/:id', (request, response) => {
  // #swagger.tags = ['Tasks']
  const updateFields = request.body;
  const taskToUpdate = Tasks.find((task) => task.id === request.params.id);
  if (!taskToUpdate) {
    response.status(404).send('Task not found.');
  } else {
    Object.assign(taskToUpdate, updateFields);
    response.status(200).json(Tasks);
  }
});

router.delete('/:id', (request, response) => {
  Tasks = Tasks.filter((task) => task.id !== request.params.id);
  response.status(200).json(Tasks);
});

router.delete('/:id', (request, response) => {
  const initialTaskLength = Tasks.length;
  Tasks = Tasks.filter((task) => task.id !== request.params.id);
  if (Tasks.length < initialTaskLength) {
    response.status(400).json({ message: 'Deleting failed.' });
  } else {
    response.status(200).json(Tasks);
  }
});

module.exports = router;
