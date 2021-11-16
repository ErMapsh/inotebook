const connectToMongo = require("./db");
const express = require('express');
const app = express();
const port = 3000;

connectToMongo();

//normal routing we writing but we need net program
app.get('/', (req, res) => {
  res.send('Hello ErMapsh!');
})

//middleware we are using for we want req form body
app.use(express.json())

// we can use also
app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})


