const tsv = require("node-tsv-json");
const commandLineArgs = require('command-line-args')
const argsDefinitions = [{ name: 'inputFile', type: String, defaultOption: true }]
const filename = commandLineArgs(argsDefinitions)['inputFile']

// Load in tsv 
const pass1 = new Promise((resolve, reject) => {
  tsv({ input: filename, parseRows: false }, (err, result) => {
    if (err) {
      console.log("error returned from tsv");
      reject(err);
    } else {
      resolve(result);
    }
  });
});

// write data to console if parsed successfully
pass1.then(result => console.log(JSON.stringify(result, null, 2)));
