var http = require("http"),
    bl = require('bl'),
    url = process.argv[2],
    options = {},
    getHost = new RegExp('^http://(.*):')

options.host = url.match(/^http:\/\/(.*):/)[1]
options.port = url.match(/^http:\/\/.*:([0-9]+)/)[1]
options.path = (url.match(/^http:\/\/.*:[0-9]+(.*)/)[1] == '') ? '/' : url.match(/^http:\/\/.*:[0-9]+(.*)/)[1]

var testUrl = function (options, callback) {
    http.get(options, function (res) {

        if (res.statusCode != 200) {
            callback('Status code' + res.statusCode)
        }

        var bodyChunks = []
        res.setEncoding('utf8')
        res.pipe(bl(function(error, data){
            if (error) {
                callback('Wrong chunk data')
            }
            console.log(data.length)
            console.log(data.toString())
        }))
    });
}

testUrl(options, function (error, content) {
    if (error) {
        throw Error(error)
    }

    content.forEach(function (row) {
        console.log(row)
    })
})