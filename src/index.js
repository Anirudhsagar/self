
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = require('./route/route');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://anirudhsagar:fgAGHtahZoVNyIR3@cluster0.btvli.mongodb.net/login&sighnup", {
    useNewUrlParser: true,
})
.then(() => {
console.log("mongodb connected");
})
.catch((err) => {
console.log(err);
})


app.use('/', route);

app.listen(process.env.PORT || 3000, () => {
    console.log("Express server is running on port 3000");
})

