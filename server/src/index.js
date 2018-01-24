const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 8081;

const app = express();

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());


app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => {
  `Server listening on port: ${PORT}`;
});
