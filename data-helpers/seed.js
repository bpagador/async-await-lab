const chance = require('chance').Chance();
const Movie = require('../models/Movie');
const Review = require('../models/Review');

const seed = async(obj) => {
  const moviesToSeed = obj?.movies || 5;
  const reviewsToSeed = obj?.reviews || 100;

  const movieArray = await Movie.create([...Array(moviesToSeed)].map(() => ({
    title: chance.word(),
    //make a sentence up top
    description: chance.sentence(),
    studio: chance.name()
  })));

  await Review.create([...Array(reviewsToSeed)].map(() => ({ 
    movie: chance.pickone(movieArray).id,
    // id is there because this random review is connected to the movie we created 
    authorName: chance.name(),
    comment: chance.paragraph()
  })));
};

module.exports = {
  seed
};
