---
slug: httpx websocket
title: 使用httpx进行WebSocket消息发送和消费
authors: [linux_china]
tags: [httpx, channel]
---

在一些通讯协议中存在者双向通讯的场景，也就是常说的Channel，既可以向Channel中发送消息，也可以从Channel中接收消息，如WebSocket, RSocket Channel等，都是这一通讯模式。
这种交互性的通讯模式，存在者发送多个消息，而且在某些场景下可能还存在者消息的等待和发送顺序，对测试来说是比较麻烦的。
那么在JetBrains HTTP Client中是如何进行Channel的消息发送和消费的呢？ 让我们看一个WebSocket的样例：

```
### WebSocket interactive request
WEBSOCKET ws://{{$exampleServer}}/ws
Content-Type: application/json

===
{
  "message": "Hello, server!"
}
=== wait-for-server
=== wait-for-server
{
  "message": "We send this message..."
}
===
{
  "message": "And this message together"
}
```

这里稍微解释一下WebSocket请求的流程：

* 首先是创建WebSocket连接，这个应该是没有什么问题的
* WebSocket长连接创建完毕后，我们马上发送第一个消息给服务端，也就是上面的`"Hello, server!"`消息
* 接下来我们看到的消息分隔符号`=== wait-for-server`，表示我们要等待WebSocket服务端回发的消息
* 接下来还是消息分隔符号`=== wait-for-server`，表示要继续等待WebSocket服务端回发的消息
* 在收到WebSocket服务端回发的两个消息后，我们接下来就是连续发生两个消息，分别是`"We send this message..."`和`"And this message together"`
* 两个消息发送完毕后，接下来就是继续等待WebSocket服务端回发的消息，直到WebSocket连接被开发者主动关闭，如JetBrains IDE中点击close按钮。

借助消息分隔符`===`，我们可以向channel中发送多个消息，当然如果你需要等待服务端返回消息后再发送，那么消息分隔符号后添加一个` wait-for-server`，这样HTTP Client就会等待服务端返回消息后再发送。

当然消息分隔符的设计，对命令行测试也非常友好，在图形化界面，如JetBrains IDE中，你可以使用图形化的界面进行交互式的消息输入，但是在命令行模式下，这个输入是非常麻烦的，
相反这种消息分隔符方式更编译命令行的测试。 [httpx 0.35.0版本](https://github.com/servicex-sh/httpx/releases/tag/v0.35.0)添加了WEBSOCKET method支持，这样你在命令行模式下也可以进行WEBSOCKET服务测试。
