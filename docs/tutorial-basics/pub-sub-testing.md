---
sidebar_position: 7
---

# PUB/SUB Testing

PUB/SUB is to test Kafka, RabbitMQ and Nats etc.

### Kafka

```
### publish kafka message
//@name kafka-pub
PUB topic-1
Host: kafka://localhost:9092
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### subscribe kafka topic 
//@name kafka-sub
SUB topic-1
Host: kafka://localhost:9092
```

### RabbitMQ

```
### publish rabit message
//@name rabbit-pub
PUB queue1
Host: amqp://localhost:5672
Content-Type: application/json

{
  "name": "Jackie"
}
```

```
### listen rabit message
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
