---
sidebar_position: 4
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

* graphql-ws support:  https://github.com/enisdenjo/graphql-ws

```
### graphql query over WebSocket
//@name subscription
GRAPHQL ws://localhost:4000/graphql
Content-Type: application/graphql

subscription { greetings }
```

