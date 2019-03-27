import * as Calendar from './calendar';
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/test', function (req, res) {
  Calendar.test();
  return res.send('Yeah, fuck !');
})
app.listen(process.env.PORT || 8080);
console.log('running')