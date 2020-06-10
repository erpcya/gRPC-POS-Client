# Generate Stub to point_of_sales.proto file
protoc proto/point_of_sales.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
