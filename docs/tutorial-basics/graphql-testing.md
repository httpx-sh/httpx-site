---
sidebar_position: 5
---

# GraphQL testing

httpx has more features to test GraphQL services.

* application/graphql support: convert to json format automatically

```
### graphql query
//@name query
GRAPHQL http://localhost:8080/graphql
Content-Type: application/graphql

query {
  bookById(id: "book-1") {
    id
    name
    pageCount
    author {
      firstName
      lastName
    }
  }
}
```

* GraphQL over WebSocket support:  https://github.com/enisdenjo/graphql-ws

```
### graphql query over WebSocket
//@name subscription
GRAPHQL ws://localhost:4000/graphql
Content-Type: application/graphql

subscription { greetings }
```

* GraphQL over RSocket support: https://docs.spring.io/spring-graphql/docs/1.0.0/reference/html/#server-rsocket

```
### GraphQL query over RSocket: rsocket schema for tcp, rsocketws schema for WS and rsocketwss schema for WSS
//@name graphql-rs-req
GRAPHQL rsocketws://localhost:8080/rsocket/graphql
Content-Type: application/graphql

query {
    bookById(id: "book-1") {
        id
        name
        pageCount
        author {
            firstName
            lastName
        }
    }
}

### GraphQL subscription over RSocket Stream
//@name graphql-rs-sub
GRAPHQL rsocketws://localhost:8080/rsocket/graphql
Content-Type: application/graphql

subscription { greetings }
```

* JSON Schema and GraphQL language injection for `application/graphql+json`

```
### GraphQL json format
POST https://httpbin.org/post
Content-Type: application/graphql+json

{
  "query": "query { me {id} }"
}
```

* GraphQL Variables

Please add GraphQL variables json after GraphQL query, for example:

```http request
GRAPHQL ws://localhost:8080/graphql

query demo($bookId: ID){
    bookById(id: $bookId) {
        id
        name
        pageCount
        author {
            firstName
            lastName
        }
    }
}

{
  "bookId": "book-1"
}
```

**Attention**: httpx JetBrains plugin requires [JetBrains GraphQL Plugin](https://plugins.jetbrains.com/plugin/8097-graphql) for GraphQL language features, please install it first.
