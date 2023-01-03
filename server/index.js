const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.json({ message: 'hi'})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});