const { MongoClient } = require("mongodb");
var url = "mongodb://127.0.0.1:27017/tasks-to-do";
const client = new MongoClient(url);

async function getAllTasks(userId) {
  let connection = await client.connect();
  let tasks = await connection
    .db()
    .collection("tasks")
    .find({ userId: userId })
    .toArray();
  return tasks;
}

async function addTask(task) {
  let connection = await client.connect();
  return await connection.db().collection("tasks").insertOne(task);
}

async function updateTask(id, taskName, dueDate) {
  let connection = await client.connect();
  return await connection
    .db()
    .collection("tasks")
    .updateOne({ id: id }, { $set: { task: taskName, dueDate: dueDate } });
}

async function deleteTask(id) {
  let connection = await client.connect();
  return await connection.db().collection("tasks").deleteOne({ id: id });
}

async function updateIsActive(id, isActive) {
  let connection = await client.connect();
  return await connection
    .db()
    .collection("tasks")
    .updateOne({ id: id }, { $set: { isActive: isActive } });
}

module.exports = {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
  updateIsActive,
};
// then way of doing it
// function getAllTasks() {
//   client.connect().then((connection) => {
//     connection
//       .db()
//       .collection("tasks")
//       .find({})
//       .toArray()
//       .then((tasks) => {
//         return tasks;
//       });
//   });
// }

// client.connect().then((connection) => {
// connection.db().collection("testDbCollection").insertOne({
//   name: "Helllo",
// });
// let result = connection
//   .db()
//   .collection("testDbCollectionrrrr")
//   .find({})
//   .toArray();
// result.then((val) => {
//   console.log(val);
// });
// });
