require('./style.less')

var $ = require('jquery');
var common = require('./common');
$('body').find('a#second').text('Second, which can be clicked.')
  .click(function(){
    console.log('second clicked with commond: '+ common );
    
    require.ensure(['underscore', './second'], function(require){
      var _ = require('underscore');
      var _sec = require('./second');
      console.log(' underscore ....'+ _.first([2,3,4])+' ...second..' +_sec);
    });
  });

module.exports = " In first";
