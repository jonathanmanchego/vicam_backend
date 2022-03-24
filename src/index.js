const express = require('express');
const app = express();
const routes = require('./routes')
const databaseTest = require('./server/database')
const port = process.env.PORT || 3000;

routes(app)


app.listen(port, () => {
  console.log('BACKEND RUNNING IN ', port);
  databaseTest();
})
