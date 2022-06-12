const express = require('express');
// const { fileURLToPath } = require('url');
const path = require('path');
// import { MongoClient } from 'mongodb';
const { MongoClient } = require('mongodb');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename + '../../../../../');

const app = express();
const PORT = 5001;

const uri = 'mongodb+srv://Developer:pt1VMrJCJKZ2BldP@cluster0.ho8l2.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const mongoRequest = async (data) => {
  try {
    await client.connect();
    const users = client.db().collection('developers');
    users.insertOne(data);
  } catch (err) {
    console.error(err);
  }
};

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../build')));

app.post('/POST', (req, res) => {
  res.status(201).json(req.body);
  mongoRequest(req.body);
  // console.log(req.body);
});

app.get('/', (req, res) => {
  // res.json(__dirname)
  // res.send(path.resolve(__dirname, 'build/index.html'));
  res.sendFile(path.resolve(__dirname, '../../build/index.html'));
});

app.listen(PORT, () => {
  console.log('Успешный запуск 5000');
});
