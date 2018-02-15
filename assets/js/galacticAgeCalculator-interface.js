import { GalacticAgeCalculator }  from './../assets/js/galacticAgeCalculator.js';
import { User }  from './../assets/js/user.js';

$(document).ready(function() {
  $("#galacticAgeCalculatorForm").submit(function(event) {
    event.preventDefault();
    const user = new User($('#name').val(), $('#birthday').val());
    const galacticAgeCalculator = new GalacticAgeCalculator($('#planet').val(), $('#lifeExpectancy').val());
    $('#modalTitle').text("Hello "+user.name+", these are your results");
    $('#age').text(galacticAgeCalculator.calculateSolarAge(user.getBirthdayYear()));
    $('#lifeExp').text(galacticAgeCalculator.lifeExpectancyPlanet(user.getBirthdayYear()));
    $('#myModal').modal('toggle');
  });
});
