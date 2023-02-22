const crypto = require('crypto');

function hashFunction(password, sha) {
  function hashPassword(password) {
    //? генерувати випадкову сіль
    const salt = crypto.randomBytes(8).toString('hex');

    //? хеш пароль за допомогою солі
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 32, sha)
      .toString('hex');

    return { salt, hash };
  }

  function verifyPassword(password, salt, hash) {
    //? хеш пароль за допомогою солі
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 1000, 32, sha)
      .toString('hex');

    //? Порівняйте хеш з хеш -паролем
    return hash === hashedPassword;
  }

  //? Приклад використання
  const { salt, hash } = hashPassword(password);
  const isPasswordValid = verifyPassword(password, salt, hash);
  return `Password: ${password}\nSalt: ${salt}\nHash: ${hash}\nPassword is valid: ${isPasswordValid}`;
}
console.log(hashFunction('myPassword', 'sha256'));
