---
sidebar_position: 17
---

# json-rpc testing

[json-rpc](https://www.jsonrpc.org/specification) is stateless, light-weight remote procedure call (RPC) protocol.

* json-rpc over HTTP

```
### json-rpc over http
JSONRPC http://127.0.0.1:8080/add
Content-Type: application/json

[ 1, 2 ]
```

* json-rpc over TCP

```
### json-rpc over tcp
JSONRPC tcp://127.0.0.1:9080/add
Content-Type: application/json

[ 1, 2 ]
```
