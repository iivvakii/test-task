const express = require('express');
const usersRouter = require('./src/routes');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())

app.use('/api/v1/users', usersRouter);

app.listen(port, () => console.log(`app listening on port ${port}`));
