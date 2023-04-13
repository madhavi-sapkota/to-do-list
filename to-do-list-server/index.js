const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(express.json());
app.use(cors());

let todos = [
  { id: "1", task: "first todo item", dueDate: new Date(), isActive: true },
  {
    id: uuidv4(),
    task: "second todo item",
    dueDate: new Date(),
    isActive: false,
  },
  {
    id: uuidv4(),
    task: "third todo item",
    dueDate: new Date(),
    isActive: false,
  },
  {
    id: uuidv4(),
    task: "forth todo item",
    dueDate: new Date(),
    isActive: true,
  },
];

app.get("/", function (req, res) {
  res.send("Hello Worlds");
});

app.get("/to-do-items", function (req, res) {
  res.send(todos);
});

app.post("/add-item", function (req, res) {
  let taskName = req.body.taskName;
  let dueDate = req.body.dueDate;
  if (!taskName) {
    res.statusMessage = "taskName is not provided";
    res.status(400).send();
  }
  let todoNewItem = {
    id: uuidv4(),
    task: taskName,
    dueDate: dueDate,
    isActive: true,
  };
  todos.unshift(todoNewItem);
  res.send(todoNewItem);
});

app.post("/update-item", function (req, res) {
  let newTaskName = req.body.newTaskName;
  let id = req.body.id;
  let newDueDate = req.body.newDueDate;
  let index = todos.findIndex((item) => item.id == id);
  todos[index].task = newTaskName;
  todos[index].dueDate = newDueDate;
  res.status(200).send();
});

app.post("/delete-item", function (req, res) {
  let id = req.body.id;
  todos = todos.filter((item) => item.id !== id);
  res.status(200).send();
});

app.post("/mark-complete", function (req, res) {
  let id = req.body.id;
  let index = todos.findIndex((item) => item.id === id);
  todos[index].isActive = false;
  res.status(200).send();
});

app.post("/mark-active", function (req, res) {
  let id = req.body.id;
  let index = todos.findIndex((item) => item.id === id);
  todos[index].isActive = true;
  res.status(200).send();
});

app.listen(3000);
