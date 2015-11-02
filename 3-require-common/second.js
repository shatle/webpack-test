var $ = require("jquery");
var common = require('./common');
$('body').find('a#first').text('First, which can be clicked.')
  .click( function(){
    console.log('first clicked with commond: '+ common );

    // require.ensure(['./first'], function(){
      var first = require('./first');
      console.log('exports from first: '+ first);
    // });

  });

module.exports = "In second";
