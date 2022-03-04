---
sidebar_position: 7
---

# PUB/SUB Testing

PUB/SUB is to test Kafka, RabbitMQ and Nats etc.

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

### RabbitMQ

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
