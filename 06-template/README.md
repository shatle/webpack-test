
### 

you need to install 

```
npm install html-loader --save-dev
npm install art-template --save-dev
```

and in `webpack.config.js`:

```
{ test: /\.html$/, loader: "html" }
```

in JS code, u can render page in this way:

```
var template = require('art-template');
var data = {
    title: 'title',
    list: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']
};
var noticeTpl = require('./notice.html');
var noticeFn = template.compile(noticeTpl);
$('#tplDiv').append(noticeFn(data));
```

