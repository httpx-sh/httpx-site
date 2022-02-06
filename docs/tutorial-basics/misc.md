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

**Attention**: If no target from CLI, and httpx will run first target in http file!
