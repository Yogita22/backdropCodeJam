var sys = require("sys"),
    fs = require("fs");

function processImageDir(path, outFilename, cb) {

    fs.readdir(path, function(err, files) {

        var imgfiles = [];

        // Check for images and push on the array if it's a match.
        files.forEach(function(name) {
            name.substr(-4).match(/(png|jpeg|jpg|gif)/) && imgfiles.push(name)
        });

        fs.writeFile(__dirname + '/' + outFilename, JSON.stringify({
         imgfiles
        }), function(err) {
            if (err) throw err;
            cb && cb("Sweet.");
        });

    });
}
function processApiData(path, outFilename, cb) {

        console.log('Pending');
}

processImageDir('public/assets/images', "public/data/preload-images.json", function(message) {
 console.log(message);
});
processApiData('public/data/twitterApi.json', "public/data/preload-images.json", function(message) {
 console.log(message);
});