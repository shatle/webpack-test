
## load css

#### way 1

in `first.js`:

```
require("!style!css!./style.css")
```

#### way 2

in `first.js`:

```
require('./style.css')
```

in `webpack.config.js`:

```
	...
	module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  ...
```

## watch css change 

```
webpack --progress --watch
```

you need refresh browser in each updated.

__forward__

install `npm install webpack-dev-server -g`, and run:

```
webpack-dev-server --progress --colors
```
