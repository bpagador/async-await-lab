const fs = require('fs').promises;
const { transform } = require('../lib/transformer');

describe('transform function', () => {
  beforeAll(() => {
    return fs.writeFile('./test.txt', 'YURP taco cat');
  });

  afterAll(() => {
    return fs.unlink('./test.txt');
  });

  it('should transform the text in the file', async() => {
    const transformed = await transform('./test.txt');
    expect(transformed).toEqual('TAC OCAT ');
  });
});
