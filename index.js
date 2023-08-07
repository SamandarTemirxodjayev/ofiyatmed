const express = require('express');
const router = require('./routes/router');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/ofiyatmed?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Server is connecting on MongoDB");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    })
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
app.use((req, res, next) => {
  res.status(404).render('404');
});