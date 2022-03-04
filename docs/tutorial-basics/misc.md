---
sidebar_position: 8
---

# Miscellaneous

### zsh completion: `httpx --completions zsh`

![Shell Completion](../../static/img/shell-completion.png)

### pipeline support

`echo "GET https://httpbin.org/ip" | httpx`

### default target to run

You can set default target to run by `--target ` option.

```
#!/usr/bin/env httpx --target myip --httpfile

### get my internet ip
# @name myip
GET https://httpbin.org/ip
```

### variables overwrite from ENV
HTTP environment variables are from environment files `http-client.env.json` and `http-client.private.env.json`, for example: 

```
GET https://example.com/api1
Authorization: Basic {{user}} {{password}}
```

In CLI mode you can overwrite them by ENV variables by `HTTPX_USER=admin HTTPX_PASSWORD=xx httpx hello`. 
It's friendly for CI, such as GitHub Actions.

**Attention**: If no target from CLI, and httpx will run first target in http file!
