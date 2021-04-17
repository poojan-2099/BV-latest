const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
//exrtract style and script feom subpages to layout page
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.urlencoded({extended:false}));
app.use(express.static('./assets'));

//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/',require('./router'))


app.listen(port,function(err){
    if(err){
        console.log('something is wrong in runnig port',err);
        return ;

    }
    console.log('your app running successfully on port',port);
});
