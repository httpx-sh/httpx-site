---
sidebar_position: 7
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

# Notes

Sofa RPC requires FQN(fully qualified name) for class, such as `java.lang.Integer`, `java.lang.String`.
With httpx you can omit `java.lang.` prefix, and you can also use `int`, `long`, `double`, `boolean` ... primitive types.

