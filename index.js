const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/dishes', (req, res) => {
  console.log(req.body);

  res.send('POST request received');
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});