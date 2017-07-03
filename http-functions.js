var https = require('https');

module.exports = function getHTML (options, callback) {


    https.get(options, function (response) {

      response.setEncoding('utf8');

      let rawData = '';
      response.on ('data', function (chunk) {
        rawData += chunk;
      });

      response.on('end', function() {
        console.log('Response stream complete.');
        callback(rawData)
      });
    });
  }

  function printHTML (html) {
    console.log(html);
  }

  var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
