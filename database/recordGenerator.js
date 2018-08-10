const faker = require('faker');
const fs = require('file-system');

let userRecordId = 1;
let reviewRecordId = 1;
const randomNumber = (min, limit) => Math.floor(Math.random() * (limit - min)) + min;

/* name, city, friends, photos, reviews, avatar */
const createChunkedUserRecordSet = (chunkSize) => {
  let result = '';
  for (let i = 0; i <= chunkSize; i += 1) {
    result += `${userRecordId}, ${faker.name.findName()}, ${faker.address.city()}, ${randomNumber(0, 500)}, ${randomNumber(0, 5000)}, ${randomNumber(0, 2000)}, ${faker.internet.avatar()} \n`;
    userRecordId += 1;
  }
  return result;
};

/* reviewText, stars, date, userWhoWroteIt (id is between 1 and 20million), locationItsAbout */
const createChunkedReviewRecordSet = (chunkSize) => {
  let result = '';
  for (let i = 0; i <= chunkSize; i += 1) {
    result += `${reviewRecordId}, ${faker.lorem.paragraph()}, ${randomNumber(1, 6)}, ${randomNumber(1, 13)}-${randomNumber(1, 31)}-${randomNumber(2005, 2018)}, ${randomNumber(1, 20000000)}, ${randomNumber(1, 100000000)} \n`;
    reviewRecordId += 1;
  }
  return result;
};

const writeToFile = (numFiles, recordsPerChunk, chunksPerFile, recordGen, fileName) => {
  for (let i = 1; i <= numFiles; i += 1) {
    for (let j = 1; j <= chunksPerFile; j += 1) {
      fs.appendFileSync(`${fileName}${i}.txt`, recordGen(recordsPerChunk));
    }
    console.log(`The data was appended to file ${fileName}${i}!`);
  }
};

writeToFile(2, 5000, 20, createChunkedUserRecordSet, 'test');


// for (let j = 1; j < 201; j += 1) { //numfiles will be 1-200 for a total of 20,000,000 records
//   for (let i = 0; i < 20; i += 1) { 
//     fs.appendFileSync(`userData${String(j)}.txt`, createChunkedUserRecordSet(5000)); //can increase this for speed 5k-10k
//   }
  
// }

// for (let j = 1; j < 501; j += 1) { //numfiles will be 1-500 for a total of 100,000,000 records
//   for (let i = 0; i < 20; i += 1) {
//     fs.appendFileSync('reviewData' + String(j) + '.txt', createChunkedReviewRecordSet(10000)); //can increase this for speed 5k-10k
//   }
//   console.log(`The record data was appended to file ${j}!`);
// }
