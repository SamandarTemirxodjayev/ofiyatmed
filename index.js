const express = require('express');
const https = require('https');
const fs = require('fs');
const router = require('./routes/router');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/arkengenerator.uz/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/arkengenerator.uz/fullchain.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/arkengenerator.uz/chain.pem')
};

const server = https.createServer(options, app);

const port = 443; 

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
