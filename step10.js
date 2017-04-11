var net = require('net'),
    port = process.argv[2],
    strftime = require('strftime'),
    server

server = net.createServer(function (socket) {
    socket.write(strftime('%F %H:%M')+"\n")
    socket.end()
}).listen(port)