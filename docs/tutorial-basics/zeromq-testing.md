---
sidebar_position: 8
---

# ZeroMQ REQ/REP testing

```
### zeromq request
//@name zero-req
ZEROREQ 127.0.0.1:5555
Content-Type: application/json

"Jackie"
```

# ZeroMQ SUB testing

```
### subscribe zeromq
//@name zero-sub
SUB topic1
Host: zeromq://localhost:5555
```
