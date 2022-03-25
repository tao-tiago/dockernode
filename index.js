const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis_server',
  port: 6379,
});

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    const myVisits = (!visits) ? 0 : parseInt(visits, 10);
    res.send(`Number of visits is: ${myVisits}`);

    client.set('visits', myVisits + 1);
  });
});

app.listen(3000, () => {
  console.log('listening on localhost:3000');
});