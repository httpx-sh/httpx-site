---
sidebar_position: 4
---

# Rust

[httpfile-rs](https://github.com/servicex-sh/httpfile-rs) is a httpfle code generator for Rust, and make HTTP requests call easy.


* Create a Rust module, such as httpbin.rs with following content:

```rust
// this would include code generated for package hello from .http file
httpfile::include_http!("index");
```

* Call http requests in your Rust program:

```rust
mod httpbin;

use std::error::Error;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct MyIp {
    origin: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let json: MyIp = httpbin::my_ip().await?.json().await?;
    println!("{:?}", json);
    Ok(())
}
```

httpfile-rs is under active development, and it is not finished yet. For more please visit https://github.com/servicex-sh/httpfile-rs
