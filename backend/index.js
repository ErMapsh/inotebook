const connectToMongo = require("./db");
const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')
app.use(cors())

connectToMongo();

//normal routing we writing but we need neat program
app.get('/', (req, res) => {
  res.send('Hello ErMapsh!');
})

//middleware we are using for we want info form body
app.use(express.json())

// we can use also
app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
})


