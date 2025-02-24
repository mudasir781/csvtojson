const express = require('express');

const path = require('path');
const app = express();


const allRoutes = require('./router/routes')

let port = 3000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(express.json({limit: '25mb'}));

app.use(allRoutes)

  
    app.listen(port);
