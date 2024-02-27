const express= require('express');
const db= require('./db/connectdb')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
res.send('Welcome to the database ')
});

// import routes files
const productRoutes = require('./routes/productRoutes');

// use the router
app.use('/products',productRoutes);

app.listen(8000,()=>{
    console.log(` server listening on port 3000`);
});