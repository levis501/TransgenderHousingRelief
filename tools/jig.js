fs = require('fs')

const FILENAME = "legal-housing-resources.json";

fs.readFile(FILENAME, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const items = JSON.parse(data);
    console.log(Object.keys(items[0]));
})
