const mongoose = require('mongoose');

 const mongoURL='mongodb://127.0.0.1:27017/ecommerce-api';

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to Mongodb server');
});

db.on('error',(err)=>{
    console.log('mongodb connection error', err);
});

db.on('disconnect',()=>{
    console.log('mongodb disconnect');
});
module.exports = db;

// async function connectMongodb(){
//     return(
//     mongoose
//     .connect('mongodb://localhost:127.0.0.1:27017/ecommerce-api')
//     .then(()=>{
//         console.log('mongodb connected')
//     })
//     .then((err)=>{
//         console.log("mongodb error: " + err)
//     })
//     )
// }


// module.exports =connectMongodb;