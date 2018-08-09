const fs = require('fs');
// const faker = require('faker');

const adj = [
  'Tasty',
  'Gorgeous',
  'Awesome',
  'Unbranded',
  'Handcrafted',
  'Small',
  'Incredible',
  'Ergonomic',
  'Refined',
  'Licensed',
];

const append = (data) => {
  const chunks = [];
  let prevIdx = 0;
  for (let j = 0; j <= data.length; j += 100000) {
    chunks.push(data.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  for (let i = 1; i <= 100; i += 1) {
    fs.appendFileSync(`data${i}.csv`, chunks[i]);
  }
};

const makeUniqueBusinesses = (rounds) => {
  const storage = [];
  const makeCombos = (counter, combo = []) => {
    if (!counter) {
      storage.push(combo);
    } else {
      for (let i = 0; i < adj.length; i += 1) {
        const element = adj[i];
        makeCombos(counter - 1, combo.concat(element));
      }
    }
  };
  makeCombos(rounds);
  append(storage);
  // console.log(storage);
};

makeUniqueBusinesses(7); //should be 7