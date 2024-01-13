---
slug: release 0.41
title: JetBrains IDE 2023.3对http的支持
authors: [ linux_china ]
tags: [ httpx ]
---

JetBrains IDE 2023.3加强了对http文件的支持，主要的特性如下：

* 支持HTTP, gRPC, GraphQL, WebSockets请求
* JavaScript's handlers: 已经支持Pre-Request/Response Handler scripts
* Import Postman collections
* Support for in-place variables in the HTTP Client: 也就是在http文件中直接声明 `@var_name = value`
* OAuth 2.0 Support

更多的请参考：

* IntelliJ IDEA 2023.3 EAP 3: Enhanced HTTP Client, Updates for Java, and More: https://blog.jetbrains.com/idea/2023/10/intellij-idea-2023-3-eap-3/
* Manage HTTP requests directly in the IDE: https://www.jetbrains.com/pages/intellij-idea-http-client/
