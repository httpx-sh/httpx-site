---
sidebar_position: 16
---

# msgpack-rpc testing

[msgpack-rpc](https://github.com/google/tarpc) is a inter-process messaging library that uses MessagePack for object serialization.

* msgpack-rpc service implementation with Ruby. Add `gem 'msgpack-rpc'` in your Gemfile

```ruby
require 'msgpack/rpc'

class MyHandler
  def add(x, y)
    x + y
  end

  def hello(name)
    "hello " + name
  end
end

svr = MessagePack::RPC::Server.new
svr.listen('0.0.0.0', 18800, MyHandler.new)
svr.run
```

* msgpack-rpc request from index.http file

```
### msgpack add request
//@name msgpack-add
MSGPACK 127.0.0.1:18800/add
Content-Type: application/json

[1, 2]


### msgpack hello request
//@name msgpack-hello
MSGPACK 127.0.0.1:18800/hello
Content-Type: application/json

"Jackie"
```

# Nvim RPC testing

Yes, you can use `MSGPACK` to test Nvim RPC.

* Start Nvim with RPC service:  `nvim --listen 127.0.0.1:6666`
* Call nvim_comand_name from `MSGPACK` as following:

```
### nvim rpc test
MSGPACK 127.0.0.1:6666/nvim_command
Content-Type: application/json

"echo 'hello world!'"
```

For more, please refer https://neovim.io/doc/user/api.html
