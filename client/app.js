var socket = io();

socket.on('message', function(msg){
	$('.data').text(msg);
});