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

module.exports = {
  getCharacter
};
