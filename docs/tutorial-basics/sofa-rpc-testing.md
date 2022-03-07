---
sidebar_position: 6
---

# Sofa RPC testing

[SOFARPC](https://www.sofastack.tech/projects/sofa-rpc/overview/) is RPC framework developed by Alipay.

```
### Sofa RPC to find user by id
//@name sofa-userById
SOFA 127.0.0.1:12200/org.mvnsearch.UseroService/findById(java.lang.Integer)
Content-Type: application/json

1
```

Now httpx only supports Sofa RPC direct communication.

