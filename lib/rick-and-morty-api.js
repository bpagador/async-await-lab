const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body: { name, status, species } }) => ({
      name, 
      status, 
      species
    }));
};

module.exports = {
  getCharacter
};
