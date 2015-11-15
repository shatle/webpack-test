require('./style.less')

var $ = require('jquery');
var common = require('./common');
var secondClickCount = 0;
$('body').find('a#second').text('Second, which can be clicked.')
  .click(function(){
    console.log('second clicked with commond: '+ common );
    secondClickCount += 1;
    $('a#second').next('span').text(secondClickCount);
    require.ensure(['underscore', './second'], function(require){
      var _ = require('underscore');
      var _sec = require('./second');
      console.log(' underscore ....'+ _.first([2,3,4])+' ...second..' +_sec);
    });
  });

module.exports = " In first";
