const express = require('express');

const router = express.Router();

const { randomUUID } = require('node:crypto');

// Array mit den Tasks (Daten, Namen und id).
let Tasks = [
  { name: 'Clean my room', until: '30.12.2023', id: '1' },
  { name: 'Walk with the dog.', until: '23.12.2023', id: '2' },
];

router.get('/', (request, response) => {
  // #swagger.tags = ['Tasks']
  response.status(200).json(Tasks);
});

// In diesem Abschnitt kann man mit /tasks/:id die einzelnen Tasks mit der id aufrufen.
router.get('/tasks/:id', (request, response) => {
  // #swagger.tags = ['Tasks']
  const task = Tasks.find((task) => task.id === request.params.id);
  if (!Tasks) {
    response.status(404).json({ message: 'Task not found.' });
  } else {
    response.status(200).json(task);
  }
});

// In diesem Abschnitt kann man einen neuen Task hinzufügen. Wenn der Task keinen namen hat
// wird zurückgegeben 'Pleas enter a Name.'. Wenn es erstellt wurde wir mit UUID eine zufällige
// id zum Task hinzugefügt.
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

// Hier kann man einen Task bearbeiten.
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

// Mit /Taslks/:id kann man eine Task wieder löschen.
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
