require('./style.less');

var $ = require('jquery');
var common = require('./common');
var template = require('art-template');

var data = {
    title: '标签',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};
template.config('base', __dirname);
console.info('-----------', __dirname)
template.config('extname', '.html');
$.ajax({
	url: '/webpack-dev-server/notice.html',
	type: 'GET',
	dataType: 'html',
	data: {param1: 'value1'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function(d) {
	var html = template.render(d)
	$('#tplDiv').empty().append(html);
});




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
