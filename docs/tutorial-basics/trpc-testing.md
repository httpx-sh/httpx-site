---
sidebar_position: 18
---

# tRPC testing

[tRPC](https://www.jsonrpc.org/specification) allows you to easily build & consume fully typesafe APIs without schemas or code generation, 
and it makes it easy to write endpoints that you can safely use in both the front and backend of your app.

* tRPC query testing

```
### trpc query
#@name trpc-query
TRPC http://localhost:2022/greeting.hello
Content-Type: application/json

{
  "name": "world"
}
```

* tRPC mutate testing

```
### trpc mutate
#@name trpc-mutate
TRPCM http://localhost:2022/post.createPost
Content-Type: application/json

{
  "title": "hello world",
  "text": "check out https://tRPC.io"
}
```
