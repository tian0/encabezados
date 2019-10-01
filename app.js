const express = require('express');
const app = express();

app.get('/', (req, res) => {
    var name = req.get('user-agent')
    console.log(name);
  res.status(201).send(name)
});

app.post('/:name', (name,res) => {
    console.log(name);
    res.status(201).send(name)
})

app.listen(3000, () => console.log('Listening on port 3000!'));