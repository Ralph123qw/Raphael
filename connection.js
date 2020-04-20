const mongoose = require('mongoose');

const URL = "mongodb+srv://dbuser:dbuser@cluster0-4auad.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async()=>{
    await mongoose.connect(URI, {useUnifiedTopology: true,
    useNewUrlParser: ture});
}

module.exports = connectDB;