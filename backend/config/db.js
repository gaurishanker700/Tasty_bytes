const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017")
.then(obj=()=>{
    console.log("Connected to MongoDB");
}

)
.catch(err=()=>{
    console.log("error in db connection"+err)
}

)