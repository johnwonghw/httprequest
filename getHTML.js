function getHTML (options, callback) {

  var https = require('https');

  var options = {
    host: '',
    path: ''
  };


  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
    });

    let rawData = '';
    response.on ('data', function (chunk) {
      rawData += chunk;
      console.log (chunk, "\n");
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML ()