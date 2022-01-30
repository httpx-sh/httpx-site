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

### HTTP file syntax

Please refer https://www.jetbrains.com/help/idea/exploring-http-syntax.html
