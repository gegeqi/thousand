'use strict';

<<<<<<< HEAD
function thousands_separators(num) {
    var expectText = String(input).split(".");
    expectText[0] = expectText[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,");
    return expectText.join(".");
  
=======
function thousands_separators(input) {
    var expectText = String(input).split(".");
    expectText[0] = expectText[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,");
    return expectText.join(".");

>>>>>>> 4bf256a026d016d3d523e5d9a22feded403ee9ba
}


module.exports = thousands_separators;

