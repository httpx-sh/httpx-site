---
sidebar_position: 1
---

# HTTP Testing

You can test HTTP services with HTTP DSL.

```
### get my internet ip
# @name myip
GET https://httpbin.org/ip

### inspection http post
# @name post
POST https://httpbin.org/post
Content-Type: application/json

[
  1
]
```

# JavaScript Code test

JetBrains HTTP Client uses JavaScript [ECMAScript 5.1](https://www.ecma-international.org/ecma-262/5.1/) as response handler for test.
httpx uses Node.js as JS engine, and you should install Node.js first.

```
### hello ip
GET https://httpbin.org/ip

> {%
    client.test("Request executed successfully", function() {
        client.log(response.status);
        client.log(response.contentType);
        client.log(response.body);
    });
%}
```

**Attentions**:

* You should know the difference between ECMAScript 5.1 and Node.js
* JavaScript code test is available for HTTP, gRPC, RSocket, Dubbo and other protocols with httpx

# REST METHOD

httpx adds new `REST` method to make language injection easy for JSON data.

For example: if you want to save schema to registry server, you should use following request:

```
### registering a new schema to Spring Cloud schema registry server
POST http://localhost:8990/
Content-Type: application/json

{
  "subject": "subject1",
  "format": "avro",
  "definition": "{\"type\":\"record\",\"name\":\"subject1_avro\",\"fields\":[{\"name\":\"timestamp\",\"type\":\"long\",\"logicalType\":\"timestamp-millis\"}]}"
}
```

But it's hard to edit definition field: content escape, no code high light and completion.

With `REST` method, we split JSON object to different parts: definition in http body and other fields in HTTP headers.

```
### registering a new schema to Spring Cloud Schema Registry Server
REST http://localhost:8990/
X-Args-subject: subject1
X-Args-format: avro
X-Body-Name: definition
Content-Type: text/avsc

{
  "type": "record",
  "namespace": "com.example.messages.avro",
  "name": "Subject1",
  "fields": [
    {
      "name": "name",
      "type": "string"
    }
  ]
}
```

`X-Args-XXX` indicates the field name and value, and `X-Body-Name` indicates the field name for HTTP body content.

# Todo

* VS Code REST Client support: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
