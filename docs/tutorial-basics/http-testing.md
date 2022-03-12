---
sidebar_position: 1
---

# HTTP Testing

You can test HTTP services with HTTP DSL.

```
### get my internet ip
# @name myip
GET https://httpbin.org/ip

### inspection http post
# @name post
POST https://httpbin.org/post
Content-Type: application/json

[
  1
]
```

# JavaScript Code test

JetBrains HTTP Client uses JavaScript [ECMAScript 5.1](https://www.ecma-international.org/ecma-262/5.1/) as response handler for test.
httpx uses Node.js as JS engine, and you should install Node.js first.

```
### hello ip
GET https://httpbin.org/ip

> {%
    client.test("Request executed successfully", function() {
        client.log(response.status);
        client.log(response.contentType);
        client.log(response.body);
    });
%}
```

**Attentions**:

* You should know the difference between ECMAScript 5.1 and Node.js
* JavaScript code test is available for HTTP, gRPC, RSocket, Dubbo and other protocols with httpx


# Todo

* VS Code REST Client support: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
