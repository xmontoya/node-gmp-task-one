const csv = require('csvtojson');
const fs = require('fs');

const readStream = fs.createReadStream('./task12/csv/node_mentoring_t1_2_input_example.csv');

const writeStream = fs.createWriteStream('./task12/csv/result.txt');

readStream.pipe(csv()).pipe(writeStream);
