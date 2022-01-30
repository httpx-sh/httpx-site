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

# Todo

* VS Code REST Client support: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
