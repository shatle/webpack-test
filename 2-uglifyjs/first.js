var $ = require('jquery');

$('body').find('a#second').text('Second, which can be clicked.')
  .click(function(){
    console.log('second clicked');

    // require.ensure(['./second'], function(require){
    //   var second = require('./second');  
    //   console.log('export from second: '+ second);
    // });  
    
    require.ensure(['underscore', './second'], function(require){
      var _ = require('underscore');
      var _sec = require('./second');
      console.log(' underscore ....'+ _.first([2,3,4])+' ...second..' +_sec);
    });
  });

module.exports = " In first";
