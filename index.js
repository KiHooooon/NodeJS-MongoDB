const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://KIHOON:!gksrlgns113@kh.iemrg.mongodb.net/KH?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
    console.log('MongoDB Connected...');
}).catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hi');
})

app.listen(port, () => {
    console.log(`Server Start ${port} port`);
})