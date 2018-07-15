const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(process.env.PORT || 9000, () => {
  console.log(`listening to port ${process.env.PORT || 9000}`);
});