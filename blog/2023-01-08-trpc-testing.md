---
slug: trpc testing
title: tRPC测试支持
authors: [ linux_china ]
tags: [ httpx ]
---

[tRPC](https://trpc.io/)已经吸引越来越多的开发者注意，正如其口号`End-to-end typesafe APIs made easy`。虽然目前主流是HTTP REST API和GraphQL，但是考虑到tRPC的优势，httpx增加了对tRPC的支持。

# tRPC请求介绍
理论上来说，tRPC是基于HTTP和WebSocket的，所以你完全可以使用httpx的HTTP测试功能来测试tRPC，如你要测试一个tRPC query，你可以这样做：

```
### tRPC query
GET http://localhost:2022/greeting.hello?input=%7B%22name%22%3A%22world%22%7D
```

对应查询来说哦，tRPC会将输入进行URL Encode编码，然后添加到URL中，作为input查询参数。 

如果是tRPC mutate，那就更简单啦，就是普通的POST请求，样例如下：

```
### trpc mutation
POST http://localhost:2022/post.createPost
Content-Type: application/json

{
  "title": "hello world",
  "text": "check out https://tRPC.io"
}
```

关于tRPC HTTP通讯的详细介绍，可以参考[HTTP RPC Specification](https://trpc.io/docs/rpc)该规范。

# httpx的tRPC支持

上述的tRPC查询列子来说，如果使用HTTP GET进行测试，还是有点麻烦，如果要进行URL Encode，而且编码后的内容也不容易读懂，所以httpx添加了tRPC支持，让该操作进行简化，如下：

```
### trpc query
#@name trpc-query
TRPC http://localhost:8080/greeting.hello
Content-Type: application/json

{
  "name": "world"
}
```

这样测试就方便多啦。 tRPC通讯的所有数据都是基于JSON类型的，所以不要忘记添加`Content-Type: application/json` HTTP头，这样可以让参数更加清晰，即便input参数只是一个简单字符串，如下：

```
### trpc query2
TRPC http://localhost:8080/greeting.hello2
Content-Type: application/json

"linux_china"
```

tRPC的mutate请求使用POST进行测试也不复杂，但是考虑到一致性，所以还是使用tRPC的专用请求方式，如下：

```
### trpc mutate
#@name trpc-mutate
TRPCM http://localhost:8080/poster.createPost
Content-Type: application/json

{
  "title": "hello world",
  "text": "check out https://tRPC.io"
}
```

**注意**：tRPC的mutate请求使用的是`TRPCM`请求方法，而query请求方法为`TRPC`，这个不要忘记啦。



