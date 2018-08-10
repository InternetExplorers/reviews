const fs = require('fs');

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
  // const headers = ['locationID', 'restaurantName']; //add in the headers
  for (let j = 0; j <= data.length; j += 1000000) { 
    // chunks.push(headers.join('\n')); //add in the headers
    chunks.push(data.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  for (let i = 1; i <= 10; i += 1) { //num files
    fs.appendFileSync(`data${i}.csv`, chunks[i]);
  }
};

const makeUniqueBusinesses = (rounds) => {
  const storage = [];
  let id = 1;
  const makeCombos = (counter, combo = []) => {
    if (!counter) {
      storage.push(`${id}, ${combo.join(' ')}`);
      id += 1;
    } else {
      for (let i = 0; i < adj.length; i += 1) {
        const element = adj[i];
        makeCombos(counter - 1, combo.concat(element));
      }
    }
  };
  makeCombos(rounds);
  append(storage);
};

makeUniqueBusinesses(7);
