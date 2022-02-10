---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **httpx in less than 5 minutes**.

## Getting Started

Please install httpx from https://github.com/httpx-sh/httpx/releases

If you are Mac user, please use `brew install httpx-sh/tap/httpx` to install httpx.

## Create index.http file

Create a simple index.http file with following code:

```
#!/usr/bin/env httpx --httpfile

### get my internet ip
# @name myip
GET https://httpbin.org/ip

```

Then you can input `httpx myip` to invoke http request. Or you can input `chmod u+x index.http` then execute `./index.http myip`

# How httpx to find http file?

* http file assigned by `-f` or `--httpfile` option
* httpx will look `index.http` by default if no http file assigned
* If httpx can not find `index.http` in current directory, and it will look `index.http` in parent directory until root directory.
* If index.http not found in parent directory chain, and it will try to find `~/.httpx/index.http` as default index.http

# HTTP file syntax

Please refer https://www.jetbrains.com/help/idea/exploring-http-syntax.html
