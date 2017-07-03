function getHTML (options, callback) {

  var https = require('https');

  https.get(options, function (response) {

    response.setEncoding('utf8');

    let rawData = '';
    response.on ('data', function (chunk) {
      rawData += chunk;
      console.log (chunk, "\n");
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

getHTML (options, printHTML)