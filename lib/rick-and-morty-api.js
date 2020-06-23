const request = require('superagent');

const getCharacter = async(id) => {
  const { body: { name, status, species } } = await request.get(`https://rickandmortyapi.com/api/character/${id}`);

  const oneCharacter = {
    name, 
    status, 
    species
  };
  return oneCharacter;
};

const getManyCharacters = idArray => {
  const promiseArray = [];
  idArray.forEach(id => promiseArray.push(getCharacter(id)));
  return Promise.all(promiseArray);
};

module.exports = {
  getCharacter,
  getManyCharacters
};
