const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    content: "Hello World!"
  });
});

app.listen(8080, () => {
  console.log('listening on localhost:8080');
});