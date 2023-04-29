require("dotenv").config();
const { MongoClient } = require("mongodb");
var url = "mongodb://127.0.0.1:27017/tasks-to-do";
const client = new MongoClient(url);

async function getAllUsers() {
  let connection = await client.connect();
  let user = await connection.db().collection("users").find({}).toArray();
  return user;
}

async function registerUser(email, password) {
  let connection = await client.connect();
  return await connection.db().collection("users").insertOne(email, password);
}

async function getUserByEmail(email) {
  let connection = await client.connect();
  let user = await connection
    .db()
    .collection("users")
    .findOne({ email: email });
  return user;
}

module.exports = {
  registerUser,
  getAllUsers,
  getUserByEmail,
};
