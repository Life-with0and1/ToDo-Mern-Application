const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Data connected successfully."))
    .catch((error) => console.log("Error in connecting with database ->", error))