---
sidebar_position: 6
---

# esbuild/Rollup httpfile plugin

Now you can import http file as ESM module and make HTTP request with function style. 

**Attention**: now httpfile plugin use global `fetch` API to make HTTP request, so please use Nodejs 18.x or `node-fetch`.

For example, you have `demo.http` file wit following code: 

```
### get my ip
//@name myIp
GET https://httpbin.org/ip
User-Agent: curl/7.47.0

### post test
//@name postTest
POST https://{{host}}/post
User-Agent: curl/7.47.0
Content-Type: application/json

{
  "name": "{{nick}}",
  "age": 42,
  "uuid": "{{$uuid}}",
  "demo": "hi` morning"
}
```

And you can import `demo.http` file as ESM module, and http request names will be treated as function names.
You can call remote HTTP service with function style instead of HTTP Client API. 

```typescript
import {myIp, postTest, graphqlSimple, graphqlDemo} from "./demo.http";

// simple http request
console.log("==============================================================");
let response = await myIp();
console.log(await response.json());

// simple http post
console.log("==============================================================");
response = await postTest({nick: "test", host: "httpbin.org", "uuid": "c8389930-1071-4b88-9676-30b9ba7f2343"});
console.log(await response.json());
```

GraphQL over HTTP support too.  

# Webpack loader for http file

If you use Webpack, you can use `webpack-loader-httpfile` to import http file.

* Add dev dependency: `npm install -D webpack-loader-httpfile`
* Modify webpack configuration(webpack.config.js) file to add httpfile loader and `experiments.topLevelAwait` as following:

```javascript
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.http$/,
                use: [
                    {
                        loader: path.resolve(__dirname, 'node_modules/webpack-loader-httpfile/index.js'),
                        options: {
                            verbose: true
                        },
                    },
                ],
            },
        ]
    },
    experiments: {
        topLevelAwait: true
    }
};
```

# Project repositories:

* esbuild-plugin-httpfile: https://github.com/servicex-sh/esbuild-plugin-httpfile
* rollup-plugin-httpfile: https://github.com/servicex-sh/rollup-plugin-httpfile
* webpack-loader-httpfile: https://github.com/servicex-sh/webpack-loader-httpfile
