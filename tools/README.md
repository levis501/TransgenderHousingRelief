# THR offline processing tools #

## Overview ##
To use the `.js` tools in this directory, first run `npm install` to get the necessary packages.
Tool                       | Description
---------------------------|-------------
`resources-tsv-to-json.js` | Node.js script to convert exported .tsv from [this spreadsheet](https://docs.google.com/spreadsheets/d/1kK3ja6eIpQzdDBicYjLZsd8ntNGK59GWxDt6L58jJW0/) to a .json file
`cities-tsv-to-json.js` | Node.js script to convert exported .tsv from [this spreadsheet](https://docs.google.com/spreadsheets/d/1uvMwH74fDQh1CSW6F2HHzCNu60AcZ2V-79gTJv7TBZw/)  to a .json file
`tsv-to-json.js` | A generic Node.js script useful as a starting point for future .tsv conversions

## Parsing Resource Links ##
1. Add, edit, or remove resource links on [this spreadsheet](https://docs.google.com/spreadsheets/d/1kK3ja6eIpQzdDBicYjLZsd8ntNGK59GWxDt6L58jJW0/). 
2. After editing go to the `File` menu, select `Download as`, then `Tab-separated values`.
3. Save the file to your local repo at `TransgenderHousingRelief/tools/legal-housing-resources.tsv`
4. Open a command terminal to `TransgenderHousingRelief/tools`
5. Execute: `node ./resources-tsv-to-json.js > ../client/src/data/legal-housing-resources.json`

## States, Territories and Cities Data ##
1. Add, edit, or remove cities on [this spreadsheet](https://docs.google.com/spreadsheets/d/1uvMwH74fDQh1CSW6F2HHzCNu60AcZ2V-79gTJv7TBZw/)
2. After editing go to the `File` menu, select `Download as`, then `Tab-separated values`.
3. Save the file to your local repo at `TransgenderHousingRelief/tools/cities.tsv`
4. Open a command terminal to `TransgenderHousingRelief/tools`
5. Execute: `node ./cities-tsv-to-json.js > ../client/src/data/cities.json`

