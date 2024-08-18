const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vipultanejapctebtech20:sFkTDPohg0qLE3vZ@cluster0.3kkctw8.mongodb.net/")
.then(obj=()=>{
    console.log("Connected to MongoDB");
}

)
.catch(err=()=>{
    console.log("error in db connection"+err)
}

)