---
sidebar_position: 11
---

# Cloud API testing

![Cloud Vendors](../../static/img/tutorial/cloud-vendors.png)

### AWS API testing

```
AWS https://iam.amazonaws.com/?Action=ListUsers&Version=2010-05-08
X-Region-Id: us-east-1
Authorization: Basic keyId:KeyScret
```

**Attention**: httpx will read config from [AWS Command Line Interface](https://aws.amazon.com/cli/) if Authorization header not available.

### Aliyun API

```
ALIYUN https://ecs-cn-hangzhou.aliyuncs.com?Action=DescribeInstances&Version=2014-05-26
Authorization: Basic keyId:keyScret
```

**Attention**:

* httpx will read config from [Alibaba Cloud CLI](https://github.com/aliyun/aliyun-cli) if Authorization header not available.
* httpx will read config from `$HOME/.alibabacloud/credentials.ini` if CLI config absent, and credentials.ini data format as following:

```
[default]
enable = true
type = access_key
access_key_id = your_access_key_id
access_key_secret = your_access_key_secret
region_id = cn-hangzhou
```

