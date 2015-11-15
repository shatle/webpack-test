var $ = require("jquery");

var firstClickCount = 0;
$('body').find('a#first').text('First, which can be clicked.')
  .click( function(){
    console.log('first clicked');
    firstClickCount += 1;
    $('a#first').next('span').text(firstClickCount);
    // require.ensure(['./first'], function(){
      var first = require('./first');
      console.log('exports from first: '+ first);
    // });

  });

module.exports = "In second";
