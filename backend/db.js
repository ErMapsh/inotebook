const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

//connecting to mongo
const connectToMongo = async ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connected to Mongo Successfully");
    })
}

// want to export something
module.exports = connectToMongo;
