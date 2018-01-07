var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var jwt    = require('jsonwebtoken');
var socket = require('socket.io');
var cors = require('cors');

var config=require('./config/config');
mongoose.Promise = global.Promise;

var app = express();
//app.use(morgan('dev'));
//app.set('superSecret', config.secret);
//app.set('DB',config.database);
 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(cors({
    origin:"http://localhost:4200"
}))

var blogRouter = require('./routes/blogs');
var loginRouter = require('./routes/login');

mongoose.connect(config.database,{ useMongoClient: true },function(err){
    if(err){
        return err;
    }
    else{
        console.log("Success Connected to "+config.database);
    }
});


app.use('/api/blogs',blogRouter);
app.use('/api/login',loginRouter);

// app.use('*',mainRouter);


// app.set('views',path.join(__dirname,'/client/views'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);
// app.use(express.static(path.join(__dirname,'client'))); 
 
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));



var server = app.listen(config.port,function(){
    console.log("Listening at Port "+config.port);
});