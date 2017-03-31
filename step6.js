
var filteredDirectory = require('./filteredDirectory'),
    directory = process.argv[2],
    extention = process.argv[3]

filteredDirectory(directory, extention, function(error, files) {
    if (error) {
        throw error
    }

    files.forEach(function (file) {
        console.log(file)
    })
})