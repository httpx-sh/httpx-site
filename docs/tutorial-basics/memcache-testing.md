---
sidebar_position: 12
---

# Memcache testing


* memcache set:

```
### memcache set
MEMCACHE user.111
Host: localhost:11211
Content-Type: application/json
     
{
  "id": 111,
  "name": "jackie"
}
```

* memcache get

```
### memcache get
MEMCACHE user.111
Host: localhost:11211     
```

* memcache delete: key prefixed with `-`

```
### memcache delete
MEMCACHE -user.111
Host: localhost:11211
```

**Attention**: 

* httpx now uses ascii memcache protocol
* If Host header missing, and httpx will use `127.0.0.1:11211` as host

