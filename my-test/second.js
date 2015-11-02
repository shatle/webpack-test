var $ = require("jquery");

$('body').find('a#first').text('First, which can be clicked.')
  .click( function(){
    console.log('first clicked');

    // require.ensure(['./first'], function(){
      var first = require('./first');
      console.log('exports from first: '+ first);
    // });

  });

module.exports = "In second";
