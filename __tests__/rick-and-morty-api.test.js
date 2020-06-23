const { getCharacter, getManyCharacters } = require('../lib/rick-and-morty-api');

describe('get character functions', () => {
  it('gets one character', () => {
    return getCharacter(1)
      .then(response => {
        expect(response).toEqual({ 'name': 'Rick Sanchez', 'species': 'Human', 'status': 'Alive' });
      });
  });

  it('gets many characters', async() => {
    const characters = await getManyCharacters([1, 1, 1]);
    expect(characters).toEqual([{ 
      'name': 'Rick Sanchez', 
      'species': 'Human', 
      'status': 'Alive' 
    }, { 
      'name': 'Rick Sanchez', 
      'species': 'Human', 
      'status': 'Alive' 
    }, { 
      'name': 'Rick Sanchez', 
      'species': 'Human', 
      'status': 'Alive' 
    }]);
  });
});
