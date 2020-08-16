const express = require('express');
const bodyParser = require('body-parser')

// Create a new express app instance
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/parse', function (req, res) {
  //console.log('data value', req.body.data)
  const data = req.body.data
  const first_split = data.split('0000', 2)
  const second_split = first_split[1].split('000', 2)
  res.status(200).json(
    {
      statusCode: 200,
      data: {firstName: first_split[0]+'0000',
      lastName: second_split[0]+'000',
      clientId: second_split[1]
    }}
    );
});

app.post('/api/v2/parse', function (req, res) {
  //console.log('data value', req.body.data)
  const data = req.body.data
  const first_split = data.split('0000', 2)
  const second_split = first_split[1].split('000', 2)
  res.status(200).json(
    {
      statusCode: 200,
      data: {firstName: first_split[0],
      lastName: second_split[0],
      clientId: second_split[1].slice(0, 3)+'-'+second_split[1].slice(2)
    }}
    );
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});