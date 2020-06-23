const mongoose = require('mongoose');
const Movie = require('../');

describe('seed function', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb.localhost:27017/seedData', {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
        
    });
  });
});
