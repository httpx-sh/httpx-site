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
* If index.http not found in parent directory chain, and it will try to find `~/.servicex/index.http` as default index.http

# Environment variables overwrite?

httpx supports to load environment variables from `http-client.env.json` and `http-client.private.env.json`, and compatible with JetBrains HTTP Client plugin.
For some cases, you want to overwrite environment variables from command line, and you can use `--name=value` option.
For example, you have a http request:

```
### fetch user detail
//@name user
GET https://api.example.com/user/{{id}}
```

you can use `httpx user --id=111` to overwrite id value from `http-client.env.json`. 

**Attentions**: 

* Space style: `--id xxx` not allowed, and you should use `--id=xxx`
* Reserved variables: `list, data, summary`, and they are option names for httpx CLI 

# HTTP file syntax

Please refer https://www.jetbrains.com/help/idea/exploring-http-syntax.html
