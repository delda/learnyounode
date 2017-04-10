var http = require("http"),
    bl = require('bl'),
    stack = [],
    counter = 0,
    index = 0

function testUrl(index, callback) {

    http.get(process.argv[2+index], function (res) {

        if (res.statusCode != 200) {
            callback('Status code' + res.statusCode)
        }

        res.setEncoding('utf8')
        res.pipe(bl(function(error, data){

            if (error) {
                callback('Wrong chunk data')
            }

            stack[index] = data.toString()
            if (++counter === 3) {
                Object.keys(stack).forEach(function (key) { console.log(stack[key]) })
            }
        }))
    });
}

process.argv.forEach(function (url) {
    if (url.match(/http/)) {
        testUrl(index, function (error, data) {
            if (error) {
                throw Error(error)
            }
        })
        index++
    }
})
