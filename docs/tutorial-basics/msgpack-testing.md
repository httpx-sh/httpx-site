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

Yes, you can use `NIVM` to test Nvim RPC.

* Start Nvim with RPC service:  `nvim --listen 127.0.0.1:6666`
* Call nvim_comand_name from `NVIM` as following:

```
### nvim Lua exec
NVIM nvim_exec_lua
Content-Type: text/x-lua

vim.api.nvim_command('!ls')

### msgpack request
NVIM nvim_buf_set_lines
Host: 127.0.0.1:6666
Content-Type: application/json

[0, 0, 0, true, ["hello"]]
```

For more, please refer https://neovim.io/doc/user/api.html

# X-Args-N HTTP Header

`X-Args-0`, `X-Args-1` introduce for language injection in JetBrains IDEs.

For example, if you want to invoke `nvim_exec_lua`, first param is Lua code, and second param is array as params for Lua code. 
You can introduce `X-Args-1: []` for second params, and http body as first param, then you easy to edit Lua code with language injection. 

```
### nvim Lua exec
//@name nvim-lua
MSGPACK 127.0.0.1:6666/nvim_exec_lua
Content-Type: text/x-lua
X-Args-1: []

local mark = "line:"
return mark .. vim.api.nvim_win_get_cursor(0)[1]
```

You can use feature with JSONRPC and DUBBO methods.
