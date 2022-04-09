---
sidebar_position: 15
---

# tarpc testing

[tarpc](https://github.com/google/tarpc) is an RPC framework for rust with a focus on ease of use.

* RPC service definition: 

```rust
// lib.rs
// This is the service definition. It looks a lot like a trait definition.
#[tarpc::service]
pub trait HelloWorld {
    async fn hello(name: String) -> String;
}
```

* TARPC request from index.http file

```
# tarpc hello
TARPC localhost:4500/hello
Content-Type: application/json
X-JSON-Type: {name:string}

{
  "name": "Jackie"
}
```


