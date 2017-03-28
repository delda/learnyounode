var fs = require('fs'),
    fileName = process.argv[2];

function processFile(fileName, callback) {
    fs.readFile(fileName, 'utf-8', function (err, content) {
        if (err) {
            return callback(err);
        }
        callback(null, content);
    })
}

processFile(fileName, function (err, content) {
    if (err) {
        throw err;
    }
    console.log(content.split('\n').length - 1);
});