const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const exp = require('constants');
const send = require('send');
const { restart } = require('nodemon');
const { request } = require('http');

app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

// Generatet by ChatGPT
let Tasks = [
  { name: "Clean my room", until: "30.12.2023", id: "1"},
  { name: "Walk with the dog.", until: "23.12.2023", id: "2" }
];

app.get('/Tasks', (request, response) => {
  // #swagger.tags = ['Tasks']
  response.status(200).json(Tasks);
});

app.get('/Tasks/:id', (request, response) => {
  // #swagger.tags = ['Tasks']
  const task = Tasks.find((task) => task.id === request.params.id);
  if (!Tasks) {
    response.status(404).json({ message: 'Task not found.' });
  } else {
    response.status(200).json(task);
  }
});

app.post('/Tasks', (request, response) => {
    // #swagger.tags = ['Tasks']
    const newTask = request.body;
    if(!newTask.name){
        response.status(400).send("Pleas enter a Name.")
    }else{
        Tasks.push(newTask);
        response.status(201).json(Tasks);
    }
});

app.patch('/Tasks/:id', (request, response) => {
    // #swagger.tags = ['Tasks']
    const updateFields = request.body;
    const taskToUpdate = Tasks.find((task) => task.id === request.params,id);
    if (!taskToUpdate) {
        response.status(404).send('Task not found.')
    }else{
        Object.assign(taskToUpdate, updateFields);
        response.status(200).json(Tasks);
    }
})

app.delete('/Tasks/:id', (request, response) => {
    // #swagger.tags = ['Tasks']
    Tasks = Tasks.filter((task) => task.id !== request.params.id);
    response.status(200).json(Tasks);
})

app.listen(port, () => {
  console.log(`Bookstore app listening on port ${port}`);
});
