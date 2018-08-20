const fs = require('fs');

const contents = [];
for (let i = 0; i < 1000000; i += 1) {
  const genLocation = () => Math.floor(Math.random() * 1000000) + 9000000;
  const genReview = () =>
    Math.floor(Math.random() * (32632381 - 32380190)) + 32632381;
  contents.push(`${genLocation()},${genReview()}\n`);
}

fs.writeFileSync('payload.csv', contents.join(''));
