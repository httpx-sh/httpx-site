---
sidebar_position: 10
---

# PUB/SUB Testing

![MQ Products](../../static/img/tutorial/mq-products.png)

### Kafka

```
### publish Kafka message
//@name kafka-pub
PUB topic-1
URI: kafka://localhost:9092
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe Kafka topic 
//@name kafka-sub
SUB topic-1
URI: kafka://localhost:9092
```

**Custom Message Headers**: you can add custom message headers that prefix wit `X-`, and `X-` will be removed from header name. 

```
### publish Kafka message
PUB topic-1
URI: kafka://localhost:9092
X-Custom-Header: header_value
Content-Type: application/json

{
  "name": "Jackie"
}
```

Custom message headers are available for Kafka, MQTT5, Apache Pulsar, RocketMQ.


### Apache Pulsar

```
### send pulsar message
//@name pulsar-pub
PUB topic1
URI: pulsar://localhost:6650
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe pulsar
//@name pulsar-sub
SUB topic1
URI: pulsar://localhost:6650
```

### AMQP - RabbitMQ

AMQP: Advanced Message Queuing Protocol, and AMQP Products: https://www.amqp.org/about/examples

```
### publish RabbitMQ message
//@name rabbit-pub
PUB queue1
URI: amqp://localhost:5672
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### Subscribe RabbitMQ queue
//@name rabbit-sub
SUB queue1
URI: amqp://localhost:5672
```

### Apache RocketMQ

Apache RocketMQ: https://rocketmq.apache.org/

```
### publish rocketmq message
//@name rocketmq-pub
PUB testTopic
URI: rocketmq://localhost:9876
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### consume rocketmq message
//@name rocketmq-sub
SUB testTopic
URI: rocketmq://localhost:9876
```

### NATS

```
### send Nats message
//@name nats-pub
PUB subject1
URI: nats://localhost:4222
Content-Type: application/json

{
  "name": "Jackie"
}

```

```
### listen Nats message
//@name nats-sub
SUB subject1
URI: nats://localhost:4222
```

**Attentions**: If you want to PUB/SUB multi Nats subjects, please use `SUB subject1,subject2` or `PUB subject1,subject2`.

### Redis Pub/Sub

```
### publish Redis message
//@name redis-pub
PUB channel1
URI: redis://localhost:6379
Content-Type: application/json

{
"name": "Jackie"
}

```

```
### subscribe Redis
//@name redis-sub
SUB channel1
URI: redis://localhost:6379
```

### MQTT Pub/Sub

MQTT: The Standard for IoT Messaging, and MQTT Software: https://mqtt.org/software/

```
### publish mqtt message
//@name mqtt-pub
PUB topic1
URI: mqtt://localhost:1883
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe mqtt
//@name mqtt-sub
SUB topic1
URI: mqtt://localhost:1883
```

**Attention**: `mqtt://` is for MQTT 3.x, and `mqtt5://` is for MQTT 5.

### Stomp Pub/Sub

Stomp: Simple Text Oriented Messaging Protocol. Implementations: http://stomp.github.io/implementations.html

```
### publish stomp message
//@name stomp-pub
PUB queue1
URI: stomp://localhost:61613
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe stomp
//@name stomp-sub
SUB queue1
URI: stomp://localhost:61613
```

### AWS SNS

```
### send sns message
PUB sns-demo
URI: arn:aws:sns:us-east-1:63279302347037:sns-demo
Content-Type: application/json
               
{
  "name": "linux_china"
}
```

### AWS EventBridge

```
### send aws eventbridge message
PUB eventbus-demo
URI: arn:aws:events:us-east-1:63279302704337:event-bus/eventbus-demo
Content-Type: application/json
                
{
  "specversion": "1.0",
  "source": "demo.event",
  "type": "com.example.someevent",
  "datacontenttype": "application/json",
  "data": {
    "name": "linux_china"
  }
}
```

### Aliyun MNS

```
### send aliyun MNS message
//@name mns-pub
PUB demo-mns
URI: mns://endpoint_host
Authorization: Basic your_key_id:your_key_secret
Content-Type: application/json

{
  "specversion": "1.0",
  "source": "demo.event",
  "type": "com.example.someevent",
  "datacontenttype": "application/json",
  "data": {
    "name": "linux_china"
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
URI: eventbridge://endpoint_host
Authorization: Basic your_key_id:your_key_secret
Content-Type: application/json

{
  "specversion": "1.0",
  "source": "demo.event",
  "type": "com.example.someevent",
  "datacontenttype": "application/json",
  "data": {
    "name": "linux_china"
  }
}
```

# FAQ

### How to test ActiveMQ?

ActiveMQ supports multi MQ protocols, and you can test ActiveMQ by following protocols:

* MQTT: 1883
* AMQP: 5672
* STOMP: 61613
