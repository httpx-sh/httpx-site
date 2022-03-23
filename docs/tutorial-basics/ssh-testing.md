---
sidebar_position: 14
---

# SSH testing

* SSH with username and password

```http request
### ssh with user name and password
SSH localhost:2022
Authorization: Basic username:password

cd /
ls -al

### ssh with user name and password
SSH username:password@localhost:2022

cd /
ls -al
```

* SSH with known host

```http request
### ssh with known host
SSH ubuntu@yourdomain.host

ls -al

```

* SSH with private key

```http request
### ssh with private key
SSH ubuntu@awshost.example.com
X-SSH-Private-Key: /path-to-ec2-key

ls -al
```

**Notes**: httpx JetBrains plugin contains Shell Script language support for HTTP Body

