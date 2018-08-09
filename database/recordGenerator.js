const faker = require('faker');
const fs = require('file-system');

const randomNumber = (min, limit) => Math.floor(Math.random() * (limit - min)) + min;

/*
name
city
friends
photos
reviews
avatar
*/
const createChunkedUserRecordSet = (chunkSize) => {
  let result = '';
  let number = 1;
  for (let i = 0; i <= chunkSize; i += 1) {
    result += `${number++}, ${faker.name.findName()}, ${faker.address.city()}, ${randomNumber(0, 500)}, ${randomNumber(0, 5000)}, ${randomNumber(0, 2000)}, ${faker.internet.avatar()} \n`; 
  }
  return result;
};

/*
reviewText
stars
date
userWhoWroteIt (id is between 1 and 20million)
locationItsAbout
*/
const createChunkedReviewRecordSet = (chunkSize) => {
  let result = '';
  let number = 1;
  for (let i = 0; i <= chunkSize; i += 1) {
    result += `${number}, ${faker.lorem.paragraph()}, ${randomNumber(1, 6)}, ${randomNumber(1, 13)}-${randomNumber(1, 31)}-${randomNumber(2005, 2018)}, ${randomNumber(1, 20000000)}, ${randomNumber(1, 100000000)} \n`;
  }
  return result;
};

for (let j = 1; j < 101; j += 1) { //numfiles will be 1-100
  for (let i = 0; i < 20; i += 1) {
    fs.appendFileSync('userData' + String(j) +'.txt', createChunkedUserRecordSet(5000)); //can increase this for speed 5k-10k
  }
  console.log(`The userdata was appended to file ${j}!`);
}

for (let j = 1; j < 101; j += 1) { //numfiles will be 1-100
  for (let i = 0; i < 20; i += 1) {
    fs.appendFileSync('reviewData' + String(j) +'.txt', createChunkedReviewRecordSet(5000)); //can increase this for speed 5k-10k
  }
  console.log(`The record data was appended to file ${j}!`);
}


const append = (data) => {
  const chunks = [];
  let prevIdx = 0;
  const headers = ['locationID', 'restaurantName']; //add in the headers
  for (let j = 0; j <= data.length; j += 100000) {
    chunks.push(headers.join('\n')); //add in the headers
    chunks.push(data.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  for (let i = 1; i <= 100; i += 1) {
    fs.appendFileSync(`data${i}.csv`, chunks[i]);
  }
};
