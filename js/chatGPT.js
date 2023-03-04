const crypto = require('crypto');

function createHashWithSalt(data, salt) {
  const hash = crypto.createHash('sha256');
  hash.update(`${data}${salt}`);
  let result = hash.digest('hex');

  let counter = 0;
  while (result.slice(0, 8) !== '00000000') {
    counter++;
    hash.update(`${data}${salt}${counter}`);
  }

  return result;
}

const data = 'Hello World';
const salt = 'mysalt';
const hash = createHashWithSalt(data, salt);
console.log(hash);
