const { getCharacter } = require('../lib/rick-and-morty-api');

describe('get character functions', () => {
  it('gets one character', () => {
    return getCharacter(1)
      .then(response => {
        expect(response).toEqual({ 'name': 'Rick Sanchez', 'species': 'Human', 'status': 'Alive' });
      });
  });
});
