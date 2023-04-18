const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyUserToken } = require("./middlewares/authentication-middleware");

let users = [];

const {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
  updateIsActive,
} = require("./respositories/task-repository");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/to-do-items", verifyUserToken, async function (req, res) {
  tasks = await getAllTasks();
  res.send(tasks);
});

app.post("/add-item", verifyUserToken, async function (req, res) {
  let taskName = req.body.taskName;
  let dueDate = req.body.dueDate;
  if (!taskName) {
    res.statusMessage = "taskName is not provided";
    return res.status(400).send();
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

app.post("/update-item", verifyUserToken, async function (req, res) {
  let newTaskName = req.body.newTaskName;
  let id = req.body.id;
  let newDueDate = req.body.newDueDate;
  await updateTask(id, newTaskName, newDueDate);
  res.status(200).send();
});

app.post("/delete-item", verifyUserToken, async function (req, res) {
  let id = req.body.id;
  await deleteTask(id);
  res.status(200).send();
});

app.post("/mark-complete", verifyUserToken, async function (req, res) {
  let id = req.body.id;
  await updateIsActive(id, false);
  res.status(200).send();
});

app.post("/mark-active", verifyUserToken, async function (req, res) {
  let id = req.body.id;
  await updateIsActive(id, true);
  res.status(200).send();
});

app.post("/register", async (req, res) => {
  const user = req.body;
  if (!user.email || !user.password) {
    return res.status(400).send("Username and password are required.");
  }
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  users.push(user);
  res.status(200).send();
});

app.post("/login", async (req, res) => {
  const userEmailAddress = req.body.email;
  const userPassword = req.body.password;

  //check if user exists
  const foundUser = users.find((user) => user.email === userEmailAddress);
  if (!foundUser) {
    return res.status(400).send("Invalid email or password");
  }
  //check if password is correct
  const isPasswordValid = await bcrypt.compare(
    userPassword,
    foundUser.password
  );
  if (!isPasswordValid) {
    return res.status(400).send("Invalid email or password");
  }
  //create token
  const token = jwt.sign({ foundUser }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
});

app.listen(3000);
