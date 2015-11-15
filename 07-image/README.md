
### 

Converted Image to base64 strings.

---

you need to install:

```
npm install url-loader --save-dev
```

and in `webpack.config.js`:

```
{ test: /\.(png|jpg|jpeg)$/, loader: "url?limit=25000" }
```

`?limit=25000` as a loader's parameter that means images which should be 25KB or smaller.

And, `img` elment should be in webpack require files. 
For this example, it works in notice.html, but index.html.
