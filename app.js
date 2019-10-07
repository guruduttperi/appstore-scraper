var store = require('app-store-scraper');
const otc = require('objects-to-csv');
const fastcsv = require('fast-csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  headers: true,
});
var txt =  new Object();
//var data = new Object();
const fs = require('fs');
//var details = {id: "2222", appId: "2223", title: "2224", url: "2225"};


// Trying to Write to file directly - Pretty sure my code is wrong since you can't store from console.log
/*
var details = store.search({
  term: 'medicine',
  num: 1,
  page: 3,
  country : 'us',
  lang: 'lang'
}).then(console.log)
.catch(console.log);

console.log("\n\n\n Printing the Stored Values");
console.log(details);
*/
/*
fs.writeFile('./data.json', JSON.stringify(details, null, 0), function(err) {
  if(err) console.log(err)
})
*/

/*
store.search({
  term: 'medicine',
  num: 3,
  page: 1,
  country : 'us',
  lang: 'lang'
}).then(fs.writeFile('a.txt', console.log, (err) => {
if (err) throw console.log("Not Found");
})
)
.catch(console.log);
*/
//obj = JSON.parse(data);

// Trying to store it in an object and write to file. Pretty sure my code is wrong
/*
var data = store.search({
  term: 'panda',
  num: 2,
  page: 3,
  country : 'us',
  lang: 'lang'
})
//.then( response => { fs.writeFile('a.txt', (data))
//})
//.catch(console.log);

details = JSON.parse(data).catch(console.log);
console.log(details);
*/

// I think that this could work.

{
  details = store.search({
  term: 'health',
  num: 100,
  page: i,
  country : 'us',
  lang: 'lang'
})
.then(data => { fs.writeFile('output.json', (JSON.stringify(data)))})
.catch(console.log);

//var apex = JSON.stringify(details);

//fs.writeFile('./data.json', JSON.stringify(details, null, 2));
/*fs.writeFile('a.csv', apex, function(err) {
  if(err) console.log(err)
}); */
/*var obj = JSON.parse(txt);
console.log(obj['id']);


fs.writeFile("output.json", obj, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});


*/
/*fs.appendFile('a.csv', obj, function (err) {
  if (err) throw err;
  console.log('Thanks, It\'s saved to the file!');
});

const ws = fs.createWriteStream("out.csv");
fastcsv
  .write(obj, { headers: true })
  .pipe(ws);
*/

/*  csvWriter
    .writeRecords(obj)
    .then(()=> console.log('The CSV file was written successfully'));
*/
/*
.then(fs.appendFile('a.csv', res = new otc(data), function (err) {
  if (err) throw err;
  console.log('Thanks, It\'s saved to the file!');
}))
.catch(console.log);
*/

//onst response = await fetch(data);
//const json = await response.json();
//console.log(json);
/*
fs.appendFile('a.txt', JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('Thanks, It\'s saved to the file!');
});
*/

//console.log(data);
