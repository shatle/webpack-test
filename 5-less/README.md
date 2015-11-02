
### diff from 4-css

you need to install `npm install less-loader --save-dev`, and change `first.js`:

```
require('./style.less')
```

and change `webpack.config.js`:

```
{ test: /\.less$/, loader: "style!css!less" }
```