# ADempiere POS Client for gRPC

[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-data-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-data-client)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-data-client.svg)](https://github.com/erpcya/adempiere-gRPC-Server/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-data-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-data-client)
<!--
[![Dependencies](https://img.shields.io/librariesio/github/erpcya/grpc-data-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-data-client)
-->

ADempiere POS Client write in Javascript for gRPC service, use it for connect with
[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).

## Requirements
- [Envoy Proxy](https://www.envoyproxy.io/)
- [Envoy Pre-configured Proxy](https://github.com/erpcya/gRPC-Envoy-Proxy)

## Using it

``` bash
# installing via NPM
npm i @adempiere/grpc-data-client
```
``` bash
# installing via Yarn
yarn add @adempiere/grpc-data-client
```

## A Example
### Declare POS
```javascript
const POS = require('@adempiere/grpc-data-client');
let data = new POS(GRPC_HOST, 'Session UUID');
```
### Declare POS with specific language
```javascript
const POS = require('@adempiere/grpc-data-client');
let data = new POS(GRPC_HOST, 'Session UUID', 'es_VE');
```

### Request a simple Object based on Table and UUID
```javascript
//  Request a single Object
data.getEntity('AD_Element', '8cc49692-fb40-11e8-a479-7a0060f0aa01')
.then(valueObject => {
  console.log("Object with single UUID");
    //  Value
  let map = valueObject.getValuesMap();
  console.log("ColumnName: " + map.get("ColumnName").getStringvalue());
  console.log("Name: " + map.get("Name").getStringvalue());
  console.log("Display Type: " + map.get("AD_Reference_ID").getIntvalue());
  console.log("Value Type: " + map.get("AD_Reference_ID").getValuetype());
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
Object with single UUID
ColumnName: HR_JobOpening_ID
Name: Job Openings
Display Type: 13
Value Type: 0
```

## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)
After installed it just go to source code folder an run it:
```Shell
protoc proto/businessdata.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
```
And run it for POS
protoc proto/point_of_sales.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
The result is generated on: src/grpc folder
