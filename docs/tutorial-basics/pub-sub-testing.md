---
sidebar_position: 10
---

# PUB/SUB Testing

PUB/SUB is to test Kafka, RabbitMQ, Apache Pulsar, Redis, Nats etc.

### Kafka

```
### publish Kafka message
//@name kafka-pub
PUB topic-1
Host: kafka://localhost:9092
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe Kafka topic 
//@name kafka-sub
SUB topic-1
Host: kafka://localhost:9092
```

### Apache Pulsar

```
### send pulsar message
//@name pulsar-pub
PUB topic1
Host: pulsar://localhost:6650
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe pulsar
//@name pulsar-sub
SUB topic1
Host: pulsar://localhost:6650
```

### AMQP - RabbitMQ

AMQP: Advanced Message Queuing Protocol, and AMQP Products: https://www.amqp.org/about/examples

```
### publish RabbitMQ message
//@name rabbit-pub
PUB queue1
Host: amqp://localhost:5672
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### Subscribe RabbitMQ queue
//@name rabbit-sub
SUB queue1
Host: amqp://localhost:5672
```

### NATS

```
### send Nats message
//@name nats-pub
PUB subject1
Host: nats://localhost:4222
Content-Type: application/json

{
  "name": "Jackie"
}

```

```
### listen Nats message
//@name nats-sub
SUB subject1
Host: nats://localhost:4222
```

### Redis Pub/Sub

```
### publish Redis message
//@name redis-pub
PUB channel1
Host: redis://localhost:6379
Content-Type: application/json

{
"name": "Jackie"
}

```

```
### subscribe Redis
//@name redis-sub
SUB channel1
Host: redis://localhost:6379
```

### MQTT Pub/Sub

MQTT: The Standard for IoT Messaging, and MQTT Software: https://mqtt.org/software/

```
### publish mqtt message
//@name mqtt-pub
PUB topic1
Host: mqtt://localhost:1883
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe mqtt
//@name mqtt-sub
SUB topic1
Host: mqtt://localhost:1883
```

### Stomp Pub/Sub

Stomp: Simple Text Oriented Messaging Protocol. Implementations: http://stomp.github.io/implementations.html

```
### publish stomp message
//@name stomp-pub
PUB queue1
Host: stomp://localhost:61613
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe stomp
//@name stomp-sub
SUB queue1
Host: stomp://localhost:61613
```

### Aliyun MNS

```
### send aliyun MNS message
//@name mns-pub
PUB demo-mns
Host: mns://endpoint_host
Authorization: Basic your_key_id:your_key_secret
Content-Type: application/json

{
  "specversion": "1.0",
  "source": "demo.event",
  "type": "com.example.someevent",
  "datacontenttype": "application/json",
  "data": {
    "name": "jackie"
  }
}
```

**Attention**: Authorization header for authentication

* Without Authorization header: httpx will read Aliyun AK from `~/.aliyun/config.json` configured by [Aliyun CLI](https://github.com/aliyun/aliyun-cli)
* AK ID match:  if secret length <= 4, such as `Authorization: Basic 5Oi0:11`, and httpx will find AK from `~/.aliyun/config.json` with id as part of `access_key_id` value

### Aliyun EventBridge

```
### send aliyun event bridge message
//@name ali-event
PUB demo-event-bus
Host: eventbridge://endpoint_host
Authorization: Basic your_key_id:your_key_secret
Content-Type: application/json

{
  "specversion": "1.0",
  "source": "demo.event",
  "type": "com.example.someevent",
  "datacontenttype": "application/json",
  "data": {
    "name": "jackie"
  }
}
```

# FAQ

### How to test ActiveMQ?

ActiveMQ supports multi MQ protocols, and you can test ActiveMQ by following protocols:

* MQTT: 1883
* AMQP: 5672
* STOMP: 61613
