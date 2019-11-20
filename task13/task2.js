import csv from 'csvtojson'
import fs from 'fs'

const readStream = fs.createReadStream('./task13/csv/node_mentoring_t1_2_input_example.csv');

const writeStream = fs.createWriteStream('./task13/csv/result.txt');

readStream.pipe(csv()).pipe(writeStream);