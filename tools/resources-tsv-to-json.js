tsv = require("node-tsv-json");

const filename = 'legal-housing-resources.tsv';

// Load in tsv 
const pass1 = new Promise((resolve, reject) => {
    tsv({ input: filename, parseRows: false }, (err, result) => {
        if (err) {
            reject(err);
        } else {
            resolve(result);
        }
    });
});

// parse tags fields
const pass2 = pass1.then(result => result.map(element =>
    Object.assign(element,
        { tags: element.tags.split(',').map(t => t.trim()) })));

pass2.then(result => {
    console.log(JSON.stringify(result, null, 0));
})
