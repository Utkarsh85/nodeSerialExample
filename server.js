// var config= require('./config.json');

// var SerialPort = require('serialport').SerialPort;
// var port = new SerialPort('/dev/ttyS0');
 
// port.on('open', function () {
//   port.on('data', function(data) {
//     console.log(data);
//   });
// });


///////////////////SERVER SETUP//////////////////////////////
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path= require('path');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/client/app.js', function(req, res){
	res.sendFile(path.join(__dirname + '/client/app.js'));
});

io.on('connection', function(socket){
	console.log('a user connected');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});


//////////////////SENDING MESSAGES///////////////////////////
setInterval( function() {

	var msg = Math.random();
	// var msg = new Date().getTime();
	io.emit('message', msg);
	// console.log (msg);

}, 100);