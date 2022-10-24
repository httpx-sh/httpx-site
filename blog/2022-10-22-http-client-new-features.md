---
slug: httpclient features
title: JetBrains HTTP Client新特性
authors: [ linux_china ]
tags: [ httpx ]
---

最新的[IntelliJ IDEA 2022.3 EAP 4:](https://blog.jetbrains.com/idea/2022/10/intellij-idea-2022-3-eap-4/#Code_style_improvements_for_the_HTTP_Client)版本，
HTTP Client有了最新一些特性更新，主要是Code Style和Pre-request scripts，这里稍微介绍一下。

# Code style improvements for the HTTP Client

在HTTP服务测试中，经常会遇到URL中参数比较多的场景，这个时候输入参数就比较麻烦，而新的格式就简单多啦，可以非常方便地管理各个参数，样式如下： 

```http request
GET http://localhost:8080/api/html/get?
  name=xxx&
  vip=true
```

# Pre-request scripts and new APIs for JavaScript handlers

在一些HTTP请求场景中，一些参数可能是动态的，所以我们希望能在执行请求前执行一些脚本，完成对应的参数赋值。
现在你只要在请求Method前添加一段JavaScript脚本，就可以完成对应的逻辑，如下：

```http request
### get user info
< {%
request.variables.set("name", "linux_china");
%}
GET http://localhost:8080/api/user/{{name}}
```

考虑到经常要使用到一些加密相关的逻辑，所以新的版本中增加了сrypto API的支持，样例如下： 

![сrypto API](https://blog.jetbrains.com/wp-content/uploads/2022/10/image-35.png)

这样在经常涉及到请求签名的场景中，直接调用сrypto API就可以啦。

另外考虑到Mock的场景，新版本还增加了random API的支持，样例如下：

![Random API](https://blog.jetbrains.com/wp-content/uploads/2022/10/image-36.png)

这样使用mock数据进行服务测试也简单多啦。

httpx命令行也做了相应的更新，在最新的[0.37.1版本](https://github.com/servicex-sh/httpx/releases/tag/v0.37.1)中，已经增加了这些特性的支持。
