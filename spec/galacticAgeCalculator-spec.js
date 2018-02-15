import { GalacticAgeCalculator }  from './../assets/js/galacticAgeCalculator.js';


describe('GalacticAgeCalculator', function() {
  let galacticAgeCalculator;
  const date = "2000-01-01";
  let moment = require('moment');


  // Instantiate a new GalacticAgeCalculator class before each test
  beforeEach(function() {
    galacticAgeCalculator = new GalacticAgeCalculator("0", "80");
  });

  // convertYearToSeconds
  it('should convert one year in seconds', function() {
    let years = "1";
    expect(galacticAgeCalculator.convertYearToSeconds(years)).toEqual(31536000);
  });

   //calculateSolarAge
   it('should return age on chosen planet', function() {
     expect(galacticAgeCalculator.calculateSolarAge("2000")).toEqual(18);
  });

  // lifeExpectancyPlanet
  it('should return life expectancy on chosen from planet dependening on continent', function() {
    expect(galacticAgeCalculator.lifeExpectancyPlanet("2000")).toEqual("You have 62 years left to live on Earth.");
    expect(galacticAgeCalculator.lifeExpectancyPlanet("1900")).toEqual("You surpassed the expectation of life on Earth.");
  });
});
