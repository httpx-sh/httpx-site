---
sidebar_position: 2
---

# gRPC testing

You can test gRPC service from HTTP file.

```
### gRPC call SayHello
//@name SayHello
GRPC localhost:50052/Greeter/SayHello

{
  "name": "Jackie"
}
```

List remote gRPC services

```
### list remote gRPC services
//@name services
GRPC localhost:50052/services

```

httpx uses [gRPCurl](https://github.com/fullstorydev/grpcurl) to call dest gRPC services,
and you don't need to have proto file in your project.
