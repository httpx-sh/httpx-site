---
sidebar_position: 6
---

# Dubbo testing

[Apache Dubbo](https://dubbo.apache.org/)  is RPC framework developed by Alibaba.

```
### Dubbo sayHi
//@name sayHi
DUBBO 127.0.0.1:20880/GreetingsService/sayHi(java.lang.String)
Content-Type: application/json

"jackie"
```

Now httpx only supports end-to-end communication.

To test Dubbo Service in JetBrains IDEs, please install Dubbo Requests plugin from https://plugins.jetbrains.com/plugin/18570-dubbo-requests-in-http-client 

