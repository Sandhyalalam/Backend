const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/',(req,res)=>
{
    res.send("Server started");
});

app.listen(4000, async ()=>
{
    console.log("Server is working");

    //connect to DB

    await mongoose.connect("mongodb+srv://db_user:sandhya16@task.vpwvf0r.mongodb.net/task");
    console.log(mongoose.connection.name);
    
});