const mongoose = require("mongoose");

const DB ="mongodb+srv://root:root@cluster0.rsqgr5q.mongodb.net/?retryWrites=true&w=majority";

// mongoose.set("strictQuery" , true);

// mongoose.connect(DB, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }).then(()=>{
//     console.log("Database Connected");
// }).catch((err)=> console.log(err));

mongoose.Promise = Promise;
// mongoose.connect(DB,{});

mongoose.connect(DB, 
    console.log("Database Connected")
)
mongoose.connection.on("error", (error) => console.log(error));