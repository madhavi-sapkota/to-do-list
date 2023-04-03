const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(express.json());
app.use(cors());

let todos = [
  { id: "1", task: "first todo item", isActive: true },
  { id: uuidv4(), task: "second todo item", isActive: true },
  { id: uuidv4(), task: "third todo item", isActive: true },
  { id: uuidv4(), task: "forth todo item", isActive: true },
];

app.get("/", function (req, res) {
  res.send("Hello Worlds");
});

app.get("/to-do-items", function (req, res) {
  res.send(todos);
});

app.post("/add-item", function (req, res) {
  let taskName = req.body.taskName;
  let todoNewItem = {
    id: uuidv4(),
    task: taskName,
    isActive: true,
  };
  todos.push(todoNewItem);
  res.status(200).send();
});

app.post("/update-item", function (req, res) {
  let newTaskName = req.body.newTaskName;
  let id = req.body.id;
  let index = todos.findIndex((item) => item.id == id);
  todos[index].task = newTaskName;
  res.status(200).send();
});

app.post("/delete-item", function (req, res) {
  let id = req.body.id;
  todos = todos.filter((item) => item.id !== id);
  res.status(200).send();
});
app.listen(3000);
