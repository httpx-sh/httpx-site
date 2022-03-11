---
sidebar_position: 3
---

# HTTP DSL syntax

httpx supports [JetBrains HTTP request syntax](https://www.jetbrains.com/help/idea/exploring-http-syntax.html)
and [VS Code REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) both.

### Environment variables

All environment variables are defined in json files:

* http-client.env.json - regular variables
* http-client.private.env.json - private variables, such as passwords, tokens, certificates, and other sensitive information
* .vscode/settings.json

```json
{
  "rest-client.environmentVariables": {
    "$shared": {
      "username": "admin",
      "password": "123456"
    },
    "development": {
      "hostname": "localhost:8080"
    },
    "production": {
      "hostname": "localhost:8081"
    }
  }
}
```

**Attention**: httpx doesn't support File/Request Variables in VS Code REST Client.

# Extension

Some functions are not compatible with JetBrains HTTP Client and VS Code REST Client!!!

### Functions

#### Function call styles:

* function without params: `{{$uuid}}`,  `{{$guid}}`, `{{$timestamp}}`, `{{$randomInt}}`
* function with params: `{{$base64 abc123}}`,  `{{$base64 %name}}`, `{{$escapeXml <user></user>}}`
* function with template params:

```
{{$base64 `%{name}:%{password}`}}
```

If you want to refer env variables, please use `%name` as param or `%{name}` in template literal.

#### Function list:

* data: uuid, guid, randomInt, timestamp, datetime, localDatetime, projectRoot, historyFolder
* encode: base64, urlEncode
* escape: escapeHtml, escapeXml, escapeJson, escapeJavaScript
* hmac: hmacMD5, hmacSHA1 hmacSHA256 hmacSHA512 - hex encoded: `{{$hmacSHA1 key1 text}}`, base64 encode: `{{$hmacSHA1 key1 text base64}}`
* digest: md5 sha1 sha256 sha512 - hex encoded: `{{$sha256 text}}`, base64 encoded: `{{$sha256 text base64}}`
* misc: processEnv, dotenv
