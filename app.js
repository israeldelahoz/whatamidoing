//setup Dependencies//{{{
require(__dirname + "/lib/setup")
.ext( __dirname + "/").
ext( __dirname+"/lib/Socket.IO-node");

var connect = module.exports.connect  = require('connect')
, express   = module.exports.express  = require('express')
, sys       = require('sys')
, io        = require('Socket.IO-node')
, port      = 4567;//}}}


//Setup Express//{{{
var app = express.createServer();
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.methodOverride());
  app.use(express.bodyDecoder());
  app.use(express.staticProvider(__dirname + '/static'));
  app.use(express.compiler({ src: __dirname + '/static', enable: ['less'] }));
  app.use("/", require("controllers/tasks"));
  app.use(app.router);
});//}}}

app.listen(port);

//Setup Socket.IO//{{{
var io = io.listen(app);
io.on('connection', function(client){
  console.log('Client Connected');
  client.on('message', function(message){
    client.broadcast(message);
    console.log("from client");
    console.log(message.name)
  });
  client.on('disconnect', function(){
    console.log('Client Disconnected.');
  });
});//}}}

function NotFound(msg){
  this.name = 'NotFound';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}//}}}


console.log('Listening on http://0.0.0.0:' + port );
// vim: set foldmethod=marker:
