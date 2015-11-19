webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	var common = __webpack_require__(3);
	var firstClickCount = 0;
	$('body').find('a#first').text('First, which can be clicked.')
	  .click( function(){
	    console.log('first clicked with commond: '+ common );
	    firstClickCount += 1;
	    $('a#first').next('span').text(firstClickCount);
	    // require.ensure(['./first'], function(){
	      var first = __webpack_require__(1);
	      console.log('exports from first: '+ first);
	    // });

	  });

	module.exports = "In second";


/***/ }

});