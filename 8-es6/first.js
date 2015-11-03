require('./style.less');

var $ = require('jquery');
var common = require('./common');

// var template = require('art-template');
// var data = {
//     title: 'title',
//     list: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']
// };
// var noticeTpl = require('./notice.html');
// var noticeFn = template.compile(noticeTpl);
// $('#tplDiv').append(noticeFn(data));


// template strings
var name = "Bob", time = "today";
var es6_tpl_str = `Hello ${name}, how are you ${time}?`
// destructing
var [a, ,b] = [1,2,3];
// default params
function f(x, y=12) {
  return x + y;
}
console.info('=======es6====', es6_tpl_str, a, b, f(3) );

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
