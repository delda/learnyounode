module.exports = function (directory, extention, callback) {
    var fs = require('fs')

    fs.readdir(directory, function (error, files) {
        if (error) {
            return callback(error)
        }

        var regexp = new RegExp('.+\\.' + extention + '$'),
            filesList = []

        files.forEach(function (file) {
            if (regexp.test(file)) {
                filesList.push(file);
            }
        })

        callback(null, filesList)
    })

}