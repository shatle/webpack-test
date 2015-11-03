require('./style.less');

var $ = require('jquery');
var common = require('./common');
var template = require('art-template');

var data = {
    title: '标签',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};
var noticeTpl = require('./notice.html');
var noticeFn = template.compile(noticeTpl);
$('#tplDiv').append(noticeFn(data));


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
