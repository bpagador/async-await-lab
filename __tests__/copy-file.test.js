const fs = require('fs').promises;
const copy = require('../lib/copy-file');

describe('copy function', () => {
  beforeAll(() => {
    return fs.writeFile('./test.txt', 'hey there');
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('./test.txt'),
      fs.unlink('./test-copy.txt')
    ]);
  });

  it('reads then copies a file to a new dst', async() => {
    await copy('./test.txt', './test-copy.txt');
    const testCopy = await fs.readFile('./test-copy.txt', { encoding: 'utf-8' });
    expect(testCopy).toEqual('hey there');
  });
});
