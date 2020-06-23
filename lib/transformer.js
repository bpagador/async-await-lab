const fs = require('fs').promises;

const transform = async(src) => {
  const promiseFile = await fs.readFile(src, { encoding: 'utf-8' });
  const removeCaps = promiseFile.replace(/[A-Z]/g, '');
  const uppercased = removeCaps.toUpperCase();
  const reversed = uppercased.split('').reverse().join('');

  return reversed;
};

module.exports = {
  transform
};
