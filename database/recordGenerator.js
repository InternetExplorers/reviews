const faker = require('faker');
const fs = require('file-system');
const util = require('util');

const randomNumber = (min, limit) => Math.floor(Math.random() * (limit - min)) + min;

const createChunkRecordSet = (chunkSize) => {
  let result = '';
    for (let i = 0; i <= chunkSize; i += 1) {
      result += `${faker.name.findName()}, ${faker.address.city()}, ${randomNumber(0, 500)}, ${randomNumber(0, 5000)}, ${randomNumber(0, 2000)}, 
      ${faker.internet.avatar()}, ${faker.lorem.paragraph()}, ${randomNumber(1, 6)}, ${randomNumber(1, 13)} \n`; 
    }
  return result;
};

for (let j = 1; j < 101; j++) { //numfiles will be 1-100
  for (let i = 0; i < 20; i += 1) {
    fs.appendFileSync('message' + String(j) +'.txt', createChunkRecordSet(5000)); //can increase this for speed 5k-10k
  }
  console.log(`The "data ${j}to append" was appended to file!`);
}
