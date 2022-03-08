---
sidebar_position: 3
---

# Thrift testing

Now httpx supports TJSONProtocol only.

* Single Service:

```
### thrift request
THRIFT 127.0.0.1:9090/getUser
Content-Type: application/json
     
{
  "1": {"i32":1} 
}
```

* Service Multiplexing(TMultiplexedProcessor): Add service namespace

```
### thrift request
THRIFT 127.0.0.1:9090/UserService/getUser
Content-Type: application/json
     
{
  "1": {"i32":1} 
}
```

