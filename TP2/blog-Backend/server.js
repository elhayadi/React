const express = require('express');
const cors = require('cors');
const Mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const con = Mongoose.connection;
con.once('open', () => {
    console.log("MongoDb database connected successfully");
})

const articleRouter = require('./routes/article');
app.use('/article', articleRouter);

app.listen(port, () => {
    console.log('running on port:' + port);
})







