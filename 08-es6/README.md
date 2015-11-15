
### 

use ES6 by babel, but be slow of the converting.

---

you need to install:

```
npm install babel-loader babel-core babel-preset-es2015 --save-dev
```

and in `webpack.config.js`:

```
{ test: /\.js$/, exclude: [node_modules_dir], loader: "babel?presets[]=es2015" },
```

`?presets[]=es2015` is a parameter and detail in [babel-loader](https://www.npmjs.com/package/babel-loader)


Then, you can see which in `first.js`: 

```
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
```

and in browser console: 

```
=======es6=11=== Hello Bob, how are you today? 1 3 15
```