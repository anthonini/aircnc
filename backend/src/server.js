const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://aircnc:aircnc@ancluster-shard-00-00.nnapr.mongodb.net:27017,ancluster-shard-00-01.nnapr.mongodb.net:27017,ancluster-shard-00-02.nnapr.mongodb.net:27017/aircnc?ssl=true&replicaSet=atlas-fpp63a-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);