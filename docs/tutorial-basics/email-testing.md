---
sidebar_position: 7
---

# Email testing

httpx supports to send email by SMTP.

```
### send an email by Gmail
//@name mail
MAIL mailto:demo@example.com
Host: tls://smtp.gmail.com:587
Authorization: Basic your_name@gmail.com:google_app_password
From: your_name@gmail.com
Subject: e-nice to meet you
Content-Type: text/plain

Hi Master:
  this is testing email.

Best regards
Yours sincerely Zombie
```

Attentions:

* Gmail: please use App Password from https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor
