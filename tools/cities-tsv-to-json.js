const tsv = require("node-tsv-json");

const filename = 'cities.tsv';

// pass1: Load in tsv 
const pass1 = new Promise((resolve, reject) => {
  try {
    tsv({ input: filename, parseRows: false }, (err, result) => {
      if (err) {
        console.log("error returned from tsv");
        reject(err);
      } else {
        resolve(result);
      }
    });
  } catch (err) {
    reject(err);
  }
});

// pass2: Remove blank field.  If state is blank, use value from previous record
const pass2 = pass1.then(result => {
  const arr = [];
  var i;
  for (i = 0; i < result.length; i++) {
    const city = result[i].Cities;
    if (city.length > 0) {
      const state = result[i].States.length > 0 ? result[i].States : arr[arr.length-1].state
      arr.push({ city, state });
    }
  }
  return arr;
})

// pass3: sort by city name
const pass3 = pass2.then(result => result.sort((c1,c2) => c1.city.localeCompare(c2.city)))

pass3.then(result => console.log(JSON.stringify(result)));
