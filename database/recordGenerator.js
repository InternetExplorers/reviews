const faker = require('faker');
const fs = require('file-system');

let userRecordId = 1;
// let reviewRecordId = 1;
const randomNumber = (min, limit) => Math.floor(Math.random() * (limit - min)) + min;

const chooseInflatedRecords = (numFiles, percent) => {
  const filesToInflate = [];
  const numToInflate = (percent / 100) * numFiles;
  let i = 0;
  while (i < numToInflate) {
    filesToInflate.push(randomNumber(1, numFiles));
    i += 1;
  }
  return filesToInflate;
};

const createChunkedRecordSet = (chunkSize, recordType) => {
  let result = '';
  const recordsToInflate = chooseInflatedRecords(10000000, 2);
  for (let i = 0; i < chunkSize; i += 1) {
    if (recordType === 'user') {
      result += `${userRecordId}, ${faker.name.findName()}, ${faker.address.city()}, ${randomNumber(0, 500)}, ${randomNumber(0, 5000)}, ${randomNumber(0, 2000)}, ${faker.internet.avatar()} \n`;
      userRecordId += 1;
    } else if (recordType === 'review') {
      if (i % 150 === 0) {
        for (let j = 0; j < randomNumber(10, 20); j += 1) {
          result += `${faker.lorem.paragraph()}, ${randomNumber(1, 6)}, ${randomNumber(1, 13)}-${randomNumber(1, 31)}-${randomNumber(2005, 2018)}, ${randomNumber(1, 20000000)}, ${recordsToInflate[0]} \n`;
        }
        recordsToInflate.pop();
      } else {
        result += `${faker.lorem.paragraph()}, ${randomNumber(1, 6)}, ${randomNumber(1, 13)}-${randomNumber(1, 31)}-${randomNumber(2005, 2018)}, ${randomNumber(1, 20000000)}, ${randomNumber(1, 100000000)} \n`; 
      }
      // reviewRecordId += 1;
    }
  }
  return result;
};

const writeToFile = (numFiles, recordsPerChunk, chunksPerFile, recordType, fileName) => {
  for (let i = 1; i <= numFiles; i += 1) {
    for (let j = 1; j <= chunksPerFile; j += 1) {
      fs.appendFileSync(`${fileName}${i}.csv`, createChunkedRecordSet(recordsPerChunk, recordType));
    }
    console.log(`The data was appended to file ${fileName}${i}!`);
  }
};

// 20M user records
//writeToFile(200, 5000, 20, 'user', 'userData');

// 30M review records
// 2% of records will have exceptionally high number of reviews
writeToFile(300, 5000, 20, 'review', 'reviewData');


