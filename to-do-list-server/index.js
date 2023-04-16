const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
  updateIsActive,
} = require("./respositories/task-repository");

app.get("/", function (req, res) {
  res.send("Hello Worlds");
});

app.get("/to-do-items", async function (req, res) {
  tasks = await getAllTasks();
  res.send(tasks);
});

app.post("/add-item", async function (req, res) {
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
  await addTask(todoNewItem);
  res.send(todoNewItem);
});

app.post("/update-item", async function (req, res) {
  let newTaskName = req.body.newTaskName;
  let id = req.body.id;
  let newDueDate = req.body.newDueDate;
  await updateTask(id, newTaskName, newDueDate);
  res.status(200).send();
});

app.post("/delete-item", async function (req, res) {
  let id = req.body.id;
  await deleteTask(id);
  res.status(200).send();
});

app.post("/mark-complete", async function (req, res) {
  let id = req.body.id;
  await updateIsActive(id, false);
  res.status(200).send();
});

app.post("/mark-active", async function (req, res) {
  let id = req.body.id;
  await updateIsActive(id, true);
  res.status(200).send();
});

app.listen(3000);
