# ADempiere POS Client for gRPC

[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-pos-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-pos-client)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-pos-client.svg)](https://github.com/erpcya/grpc-pos-client/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-pos-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-pos-client)
[![Dependencies](https://img.shields.io/librariesio/github/erpcya/grpc-pos-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-pos-client)


ADempiere POS Client write in Javascript for gRPC service, use it for connect with
[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).

## Requirements
- [Envoy Proxy](https://www.envoyproxy.io/)
- [Envoy Pre-configured Proxy](https://github.com/erpcya/gRPC-Envoy-Proxy)

## Using it

``` bash
# installing via NPM
npm i @adempiere/grpc-pos-client --save
```

``` bash
# installing via Yarn
yarn add @adempiere/grpc-pos-client
```

## A Example
### Declare POS
```javascript
const POS = require('@adempiere/grpc-pos-client');
let data = new POS(GRPC_HOST, 'Session UUID');
```
### Declare POS with specific language
```javascript
const POS = require('@adempiere/grpc-pos-client');
let data = new POS(GRPC_HOST, 'Session UUID', 'es_VE');
```

### Request a simple Object based on Table and UUID
```javascript
//  Request a single Object
data.getProductPrice(searchValue: 'Patio Fun', priceListUuid: '8cc49692-fb40-11e8-a479-7a0060f0aa01')
.then(productPrice => {
  console.log("Product Price");
    //  Value
  console.log(productPrice);
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
Product Price
```

## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)

Note: You can also install `protoc` and `protoc-gen-grpc-web` by going to the repository directory and run the command:
```Shell
sh install-protoc.sh
```

When installation is complete, check the version with
```Shell
protoc --version
```

After installed it just go to source code folder and run it:

And run it for Point Of Sales
```Shell
protoc proto/point_of_sales.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
```
The result is generated on: src/grpc folder
- `pont_of_sales_pb.js`
- `pont_of_sales_grpc_web_pb.js`
