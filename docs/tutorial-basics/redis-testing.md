---
sidebar_position: 13
---

# Redis testing

Redis cli is great, why use HTTP DSL?

* It's hard to input JSON with CLI
* Not good to input Lua Script with eval

* Redis set with JSON. **method is RSET, not SET**

```http request
RSET admin
Content-Type: application/json

{
   "id": 1,
   "name": "Admin"
}
```

* Redis HMSET to set multi fields from JSON once

```
### Redis hmset
HMSET user.1
Host: localhost:6379
Content-Type: application/json

{ "id": 1, "name": "jackie"}     
```

* Redis EVAL script

```
### redis eval script
EVAL 1 name Jackie
Host: localhost:6379
Content-Type: text/x-lua
                  
local welcome="Hello "                 
return welcome .. ARGV[1]
```

* Redis 7.0 functions: https://redis.io/docs/manual/programmability/functions-intro/

```
### Redis 7 fuctions
//@name redis-mylib
LOAD mylib
Host: localhost:16379
Content-Type: text/x-lua

#!lua name=mylib
redis.register_function(
        'knockknock',
        function()
            return 'Who\'s there?'
        end
)
```

**Attention**:

* httpx now support RSET/HMSET/EVAL/LOAD only, and LOAD with `REPLACE` modifier.
* If Host header missing, and httpx will use `127.0.0.1:6379` as host
* httpx supports Redis Pub/Sub, please check https://httpx.sh/docs/tutorial-basics/pub-sub-testing#redis-pubsub

