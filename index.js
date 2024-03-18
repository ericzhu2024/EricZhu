import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/about.html');
  });
  app.get('/resume.html', (req, res) => {
    res.sendFile(__dirname + '/resume.html');
  });
  app.get('/index.css', (req, res) => {
    res.sendFile(__dirname + '/index.css');
  });
  app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
  });
  app.get('/resume.css', (req, res) => {
    res.sendFile(__dirname + '/resume.css');
  });
  app.get('/about.css', (req, res) => {
    res.sendFile(__dirname + '/about.css');
  });
  app.get('/github.png', (req, res) => {
    res.sendFile(__dirname + '/github.png');
  });
  app.get('/linkedin.png', (req, res) => {
    res.sendFile(__dirname + '/linkedin.png');
  })
  app.get('/reload.jpeg', (req, res) => {
    res.sendFile(__dirname + '/reload.jpeg');
  });
  app.get('/gmail.png', (req, res) => {
    res.sendFile(__dirname + '/gmail.png');
  });



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });