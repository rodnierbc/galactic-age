let moment = require('moment');
export class GalacticAgeCalculator {
  constructor(planet, lifeExpectancy) {
    this.currentYear = moment().year();
    this.planet = planet;
    this.lifeExpectancy = lifeExpectancy;
  }
  convertYearToSeconds(year) { //convert a date in milliseconds
      let yearInSeconds = year * 365 * 24 * 60 * 60;
      return yearInSeconds;
  }

  calculateSolarAge(yearParameter) {
    if(this.planet != ''){
      let planetId = parseInt(this.planet);
      let year = this.currentYear - yearParameter;
      switch(planetId) {
        case 0: //earth
          return year;
        case 1: //mercury
          return parseFloat((this.convertYearToSeconds(year) / 7568640).toFixed(0));
        case 2://venus
          return parseFloat((this.convertYearToSeconds(year) / 19552320).toFixed(0));
        case 3://mars
          return parseFloat((this.convertYearToSeconds(year) / 59287680).toFixed(0));
        case 4://jupiter
          return parseFloat((this.convertYearToSeconds(year) / 374016960).toFixed(0));
      }
    }
    else {
      return "Planet is empty";
    }
  }

  lifeExpectancyPlanet(year) {
    if(this.planet != ''){
      let planetId = parseInt(this.planet);
      let lifeExpectancy = parseInt(this.lifeExpectancy);
      let userAgePlanet = this.calculateSolarAge(year);
      let lifeExpectancyPlanet = 0;
      let years = 0;
      switch (planetId) {
        case 0: //earth
          {
            lifeExpectancyPlanet = this.lifeExpectancy;
            years = lifeExpectancyPlanet - userAgePlanet;
            if(years > 0){
              return "You have "+years+" years left to live on Earth.";
            }
            else{
              return "You surpassed the expectation of life on Earth."
            }
          }
        case 1: //mercury
          {
            lifeExpectancyPlanet = parseFloat(((this.lifeExpectancy * 365 * 24 * 60 * 60)/ 7568640).toFixed(0));
            years = lifeExpectancyPlanet - userAgePlanet;
            if(years > 0){
              return "You have "+years+" years left to live on Mercury.";
            }
            else{
              return "You surpassed the expectation of life on Mercury."
            }
          }
        case 2: //venus
          {
            lifeExpectancyPlanet = parseFloat(((this.lifeExpectancy * 365 * 24 * 60 * 60)/ 19552320).toFixed(0));
            years = lifeExpectancyPlanet - userAgePlanet;
            if(years > 0){
              return "You have "+years+" years left to live on Venus.";
            }
            else{
              return "You surpassed the expectation of life on Venus."
            }
          }
        case 3: //mars
          {
            lifeExpectancyPlanet = parseFloat(((this.lifeExpectancy * 365 * 24 * 60 * 60)/ 59287680).toFixed(0));
            years = lifeExpectancyPlanet - userAgePlanet;
            if(years > 0){
              return "You have "+years+" years left to live on Mars.";
            }
            else{
              return "You surpassed the expectation of life on Mars."
            }
          }
        case 4: //jupiter
          {
            lifeExpectancyPlanet = parseFloat(((this.lifeExpectancy * 365 * 24 * 60 * 60)/ 374016960).toFixed(0));
            years = lifeExpectancyPlanet - userAgePlanet;
            if(years > 0){
              return "You have "+years+" years left to live on Jupiter.";
            }
            else{
              return "You surpassed the expectation of life on Jupiter."
            }
          }
        }
     }
   }
  get date() {
        return this._date;
  }
  set date(newDate) {
      this._date = newDate;
  }

}
