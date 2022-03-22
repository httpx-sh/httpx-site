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

* graphql-ws support:  https://github.com/enisdenjo/graphql-ws

Now you should use `GRAPHQLWS` or `GRAPHQLWSS` methods to test GraphQL services over WebSocket, and issue link here https://youtrack.jetbrains.com/issue/IDEA-290191

```
### graphql query over WebSocket
//@name subscription
GRAPHQLWS localhost:4000/graphql
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

* X-GraphQL-Variables header
It's hard to write GraphQL query with `application/graphql+json` data format, and `X-GraphQL-Variables` introduced for GraphQL variables.

```http request
GRAPHQL https://httpbin.org/post
Content-Type: application/graphql
X-GraphQL-Variables:  {"id": 1}

query { user($id: ID) { id name } }
```

**Attention**: httpx JetBrains plugin requires [JetBrains GraphQL Plugin](https://plugins.jetbrains.com/plugin/8097-graphql) for GraphQL language features, please install it first.
