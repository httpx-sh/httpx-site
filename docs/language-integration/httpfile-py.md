---
sidebar_position: 3
---

# Python

[httpfile-py](https://pypi.org/project/httpfile-py/) allow you to import http file directly from Python, and example as following:

```python
import httpfile.loader
# noinspection PyUnresolvedReferences
import httpbin
from httpx import Response

if __name__ == '__main__':
    r: Response = httpbin.my_ip()
    print(r.json())
```

# Features

* Support Python 3.7+
* GraphQL over HTTP support
* Based on httpx with async support

For more details, please visit https://github.com/servicex-sh/httpfile-py 
