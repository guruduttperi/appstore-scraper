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
var details = {id: "2222", appId: "2223", title: "2224", url: "2225"};


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

details = store.search({
  term: 'health',
  num: 1,
  page: 1,
  country : 'us',
  lang: 'lang'
})
.then(console.log)
.catch(console.log);


fs.writeFile('./data.json', JSON.stringify(details, null, 2));
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
