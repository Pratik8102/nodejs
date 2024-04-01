const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World___iiiii');
});

app.get('/haribol', (req, res) => {
   res.send('hare krishna');
});

app.get('/idli', (req, res) => {
    res.send('welcome to south india');
});
app.get('/dosa', (req, res) => {
    res.send('welcome to south india');
});
app.get('/panipuri', (req, res) => {
    res.send('welcome to south india');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
