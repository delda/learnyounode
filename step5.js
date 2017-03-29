var fs = require('fs'),
    directory = process.argv[2],
    extention = process.argv[3];

fs.readdir(directory, function (error, files) {
    if (error) {
        throw error;
    }

    var regexp = new RegExp('.+\\.'+extention+'$');
    files.forEach(function (file) {
        if(regexp.test(file)) {
            console.log(file);
        }
    });
})
;
