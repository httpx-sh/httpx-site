---
slug: bun httpfile
title: bun-plugin-httpfile发布
authors: [ linux_china ]
tags: [ httpx, bun ]
---

最新的[Bun v0.1.11](https://github.com/oven-sh/bun/releases/tag/bun-v0.1.11)版本，添加了Plugin API的支持，
其中一项功能就是支持自定义资源加载器Loader，这个也是esbuild非常强大的地方。 所以Bun也遵循了esbuild's plugin API规范，样例代码如下：

```tsx
import { plugin } from "bun";
import { renderToStaticMarkup } from "react-dom/server";

// Their esbuild plugin runs in Bun (without esbuild)
import mdx from "@mdx-js/esbuild";
plugin(mdx());

// Usage
import Foo from "./bar.mdx";
console.log(renderToStaticMarkup(<Foo />));
```

现在你也可以在Bun中直接到导入http文件，通过一下`npm install -D bun-plugin-httpfile`添加一下`bun-plugin-httpfile`package，然后样例代码如下：

```javascript
import { plugin } from "bun";

import httpfilePlugin from 'bun-plugin-httpfile';
plugin(httpfilePlugin());

// Usage
import {myIp} from "./index.http";
let response = await myIp();
console.log(await response.text());
```

最后项目地址： https://github.com/servicex-sh/bun-plugin-httpfile 欢迎Issue和PR。
