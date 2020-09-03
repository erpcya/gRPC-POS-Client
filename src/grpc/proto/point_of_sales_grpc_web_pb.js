/**
 * @fileoverview gRPC-Web generated client stub for data
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_core_functionality_pb = require('@adempiere/grpc-core-client/src/grpc/proto/core_functionality_pb.js')

var proto_base_data_type_pb = require('@adempiere/grpc-core-client/src/grpc/proto/base_data_type_pb.js')

var proto_client_pb = require('@adempiere/grpc-core-client/src/grpc/proto/client_pb.js')
const proto = {};
proto.data = require('./point_of_sales_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.StoreClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.StorePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.PointOfSalesRequest,
 *   !proto.data.PointOfSales>}
 */
const methodDescriptor_Store_GetPointOfSales = new grpc.web.MethodDescriptor(
  '/data.Store/GetPointOfSales',
  grpc.web.MethodType.UNARY,
  proto.data.PointOfSalesRequest,
  proto.data.PointOfSales,
  /**
   * @param {!proto.data.PointOfSalesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PointOfSales.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.PointOfSalesRequest,
 *   !proto.data.PointOfSales>}
 */
const methodInfo_Store_GetPointOfSales = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PointOfSales,
  /**
   * @param {!proto.data.PointOfSalesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PointOfSales.deserializeBinary
);


/**
 * @param {!proto.data.PointOfSalesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.PointOfSales)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.PointOfSales>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.getPointOfSales =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/GetPointOfSales',
      request,
      metadata || {},
      methodDescriptor_Store_GetPointOfSales,
      callback);
};


/**
 * @param {!proto.data.PointOfSalesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PointOfSales>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.getPointOfSales =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/GetPointOfSales',
      request,
      metadata || {},
      methodDescriptor_Store_GetPointOfSales);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListPointOfSalesRequest,
 *   !proto.data.ListPointOfSalesResponse>}
 */
const methodDescriptor_Store_ListPointOfSales = new grpc.web.MethodDescriptor(
  '/data.Store/ListPointOfSales',
  grpc.web.MethodType.UNARY,
  proto.data.ListPointOfSalesRequest,
  proto.data.ListPointOfSalesResponse,
  /**
   * @param {!proto.data.ListPointOfSalesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPointOfSalesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListPointOfSalesRequest,
 *   !proto.data.ListPointOfSalesResponse>}
 */
const methodInfo_Store_ListPointOfSales = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListPointOfSalesResponse,
  /**
   * @param {!proto.data.ListPointOfSalesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPointOfSalesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListPointOfSalesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListPointOfSalesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListPointOfSalesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.listPointOfSales =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/ListPointOfSales',
      request,
      metadata || {},
      methodDescriptor_Store_ListPointOfSales,
      callback);
};


/**
 * @param {!proto.data.ListPointOfSalesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListPointOfSalesResponse>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.listPointOfSales =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/ListPointOfSales',
      request,
      metadata || {},
      methodDescriptor_Store_ListPointOfSales);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetProductPriceRequest,
 *   !proto.data.ProductPrice>}
 */
const methodDescriptor_Store_GetProductPrice = new grpc.web.MethodDescriptor(
  '/data.Store/GetProductPrice',
  grpc.web.MethodType.UNARY,
  proto.data.GetProductPriceRequest,
  proto_core_functionality_pb.ProductPrice,
  /**
   * @param {!proto.data.GetProductPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_core_functionality_pb.ProductPrice.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetProductPriceRequest,
 *   !proto.data.ProductPrice>}
 */
const methodInfo_Store_GetProductPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto_core_functionality_pb.ProductPrice,
  /**
   * @param {!proto.data.GetProductPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_core_functionality_pb.ProductPrice.deserializeBinary
);


/**
 * @param {!proto.data.GetProductPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ProductPrice)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ProductPrice>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.getProductPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/GetProductPrice',
      request,
      metadata || {},
      methodDescriptor_Store_GetProductPrice,
      callback);
};


/**
 * @param {!proto.data.GetProductPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ProductPrice>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.getProductPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/GetProductPrice',
      request,
      metadata || {},
      methodDescriptor_Store_GetProductPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListProductPriceRequest,
 *   !proto.data.ListProductPriceResponse>}
 */
const methodDescriptor_Store_ListProductPrice = new grpc.web.MethodDescriptor(
  '/data.Store/ListProductPrice',
  grpc.web.MethodType.UNARY,
  proto.data.ListProductPriceRequest,
  proto.data.ListProductPriceResponse,
  /**
   * @param {!proto.data.ListProductPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListProductPriceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListProductPriceRequest,
 *   !proto.data.ListProductPriceResponse>}
 */
const methodInfo_Store_ListProductPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListProductPriceResponse,
  /**
   * @param {!proto.data.ListProductPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListProductPriceResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListProductPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListProductPriceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListProductPriceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.listProductPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/ListProductPrice',
      request,
      metadata || {},
      methodDescriptor_Store_ListProductPrice,
      callback);
};


/**
 * @param {!proto.data.ListProductPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListProductPriceResponse>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.listProductPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/ListProductPrice',
      request,
      metadata || {},
      methodDescriptor_Store_ListProductPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.CreateOrderRequest,
 *   !proto.data.Order>}
 */
const methodDescriptor_Store_CreateOrder = new grpc.web.MethodDescriptor(
  '/data.Store/CreateOrder',
  grpc.web.MethodType.UNARY,
  proto.data.CreateOrderRequest,
  proto.data.Order,
  /**
   * @param {!proto.data.CreateOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Order.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateOrderRequest,
 *   !proto.data.Order>}
 */
const methodInfo_Store_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Order,
  /**
   * @param {!proto.data.CreateOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Order.deserializeBinary
);


/**
 * @param {!proto.data.CreateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_Store_CreateOrder,
      callback);
};


/**
 * @param {!proto.data.CreateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Order>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_Store_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.DeleteOrderRequest,
 *   !proto.data.Empty>}
 */
const methodDescriptor_Store_DeleteOrder = new grpc.web.MethodDescriptor(
  '/data.Store/DeleteOrder',
  grpc.web.MethodType.UNARY,
  proto.data.DeleteOrderRequest,
  proto_base_data_type_pb.Empty,
  /**
   * @param {!proto.data.DeleteOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.DeleteOrderRequest,
 *   !proto.data.Empty>}
 */
const methodInfo_Store_DeleteOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Empty,
  /**
   * @param {!proto.data.DeleteOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.data.DeleteOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.deleteOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/DeleteOrder',
      request,
      metadata || {},
      methodDescriptor_Store_DeleteOrder,
      callback);
};


/**
 * @param {!proto.data.DeleteOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Empty>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.deleteOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/DeleteOrder',
      request,
      metadata || {},
      methodDescriptor_Store_DeleteOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.CreateOrderLineRequest,
 *   !proto.data.OrderLine>}
 */
const methodDescriptor_Store_CreateOrderLine = new grpc.web.MethodDescriptor(
  '/data.Store/CreateOrderLine',
  grpc.web.MethodType.UNARY,
  proto.data.CreateOrderLineRequest,
  proto.data.OrderLine,
  /**
   * @param {!proto.data.CreateOrderLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.OrderLine.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateOrderLineRequest,
 *   !proto.data.OrderLine>}
 */
const methodInfo_Store_CreateOrderLine = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.OrderLine,
  /**
   * @param {!proto.data.CreateOrderLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.OrderLine.deserializeBinary
);


/**
 * @param {!proto.data.CreateOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.OrderLine)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.OrderLine>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.createOrderLine =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/CreateOrderLine',
      request,
      metadata || {},
      methodDescriptor_Store_CreateOrderLine,
      callback);
};


/**
 * @param {!proto.data.CreateOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.OrderLine>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.createOrderLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/CreateOrderLine',
      request,
      metadata || {},
      methodDescriptor_Store_CreateOrderLine);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.DeleteOrderLineRequest,
 *   !proto.data.Empty>}
 */
const methodDescriptor_Store_DeleteOrderLine = new grpc.web.MethodDescriptor(
  '/data.Store/DeleteOrderLine',
  grpc.web.MethodType.UNARY,
  proto.data.DeleteOrderLineRequest,
  proto_base_data_type_pb.Empty,
  /**
   * @param {!proto.data.DeleteOrderLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.DeleteOrderLineRequest,
 *   !proto.data.Empty>}
 */
const methodInfo_Store_DeleteOrderLine = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Empty,
  /**
   * @param {!proto.data.DeleteOrderLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.data.DeleteOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.deleteOrderLine =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/DeleteOrderLine',
      request,
      metadata || {},
      methodDescriptor_Store_DeleteOrderLine,
      callback);
};


/**
 * @param {!proto.data.DeleteOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Empty>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.deleteOrderLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/DeleteOrderLine',
      request,
      metadata || {},
      methodDescriptor_Store_DeleteOrderLine);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.UpdateOrderRequest,
 *   !proto.data.Order>}
 */
const methodDescriptor_Store_UpdateOrder = new grpc.web.MethodDescriptor(
  '/data.Store/UpdateOrder',
  grpc.web.MethodType.UNARY,
  proto.data.UpdateOrderRequest,
  proto.data.Order,
  /**
   * @param {!proto.data.UpdateOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Order.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.UpdateOrderRequest,
 *   !proto.data.Order>}
 */
const methodInfo_Store_UpdateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Order,
  /**
   * @param {!proto.data.UpdateOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Order.deserializeBinary
);


/**
 * @param {!proto.data.UpdateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.updateOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/UpdateOrder',
      request,
      metadata || {},
      methodDescriptor_Store_UpdateOrder,
      callback);
};


/**
 * @param {!proto.data.UpdateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Order>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.updateOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/UpdateOrder',
      request,
      metadata || {},
      methodDescriptor_Store_UpdateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.UpdateOrderLineRequest,
 *   !proto.data.OrderLine>}
 */
const methodDescriptor_Store_UpdateOrderLine = new grpc.web.MethodDescriptor(
  '/data.Store/UpdateOrderLine',
  grpc.web.MethodType.UNARY,
  proto.data.UpdateOrderLineRequest,
  proto.data.OrderLine,
  /**
   * @param {!proto.data.UpdateOrderLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.OrderLine.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.UpdateOrderLineRequest,
 *   !proto.data.OrderLine>}
 */
const methodInfo_Store_UpdateOrderLine = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.OrderLine,
  /**
   * @param {!proto.data.UpdateOrderLineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.OrderLine.deserializeBinary
);


/**
 * @param {!proto.data.UpdateOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.OrderLine)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.OrderLine>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.updateOrderLine =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/UpdateOrderLine',
      request,
      metadata || {},
      methodDescriptor_Store_UpdateOrderLine,
      callback);
};


/**
 * @param {!proto.data.UpdateOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.OrderLine>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.updateOrderLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/UpdateOrderLine',
      request,
      metadata || {},
      methodDescriptor_Store_UpdateOrderLine);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetOrderRequest,
 *   !proto.data.Order>}
 */
const methodDescriptor_Store_GetOrder = new grpc.web.MethodDescriptor(
  '/data.Store/GetOrder',
  grpc.web.MethodType.UNARY,
  proto.data.GetOrderRequest,
  proto.data.Order,
  /**
   * @param {!proto.data.GetOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Order.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetOrderRequest,
 *   !proto.data.Order>}
 */
const methodInfo_Store_GetOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Order,
  /**
   * @param {!proto.data.GetOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Order.deserializeBinary
);


/**
 * @param {!proto.data.GetOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.getOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/GetOrder',
      request,
      metadata || {},
      methodDescriptor_Store_GetOrder,
      callback);
};


/**
 * @param {!proto.data.GetOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Order>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.getOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/GetOrder',
      request,
      metadata || {},
      methodDescriptor_Store_GetOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListOrdersRequest,
 *   !proto.data.ListOrdersResponse>}
 */
const methodDescriptor_Store_ListOrders = new grpc.web.MethodDescriptor(
  '/data.Store/ListOrders',
  grpc.web.MethodType.UNARY,
  proto.data.ListOrdersRequest,
  proto.data.ListOrdersResponse,
  /**
   * @param {!proto.data.ListOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListOrdersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListOrdersRequest,
 *   !proto.data.ListOrdersResponse>}
 */
const methodInfo_Store_ListOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListOrdersResponse,
  /**
   * @param {!proto.data.ListOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListOrdersResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListOrdersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListOrdersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.listOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/ListOrders',
      request,
      metadata || {},
      methodDescriptor_Store_ListOrders,
      callback);
};


/**
 * @param {!proto.data.ListOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListOrdersResponse>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.listOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/ListOrders',
      request,
      metadata || {},
      methodDescriptor_Store_ListOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListOrderLinesRequest,
 *   !proto.data.ListOrderLinesResponse>}
 */
const methodDescriptor_Store_ListOrderLines = new grpc.web.MethodDescriptor(
  '/data.Store/ListOrderLines',
  grpc.web.MethodType.UNARY,
  proto.data.ListOrderLinesRequest,
  proto.data.ListOrderLinesResponse,
  /**
   * @param {!proto.data.ListOrderLinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListOrderLinesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListOrderLinesRequest,
 *   !proto.data.ListOrderLinesResponse>}
 */
const methodInfo_Store_ListOrderLines = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListOrderLinesResponse,
  /**
   * @param {!proto.data.ListOrderLinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListOrderLinesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListOrderLinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListOrderLinesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListOrderLinesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.listOrderLines =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/ListOrderLines',
      request,
      metadata || {},
      methodDescriptor_Store_ListOrderLines,
      callback);
};


/**
 * @param {!proto.data.ListOrderLinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListOrderLinesResponse>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.listOrderLines =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/ListOrderLines',
      request,
      metadata || {},
      methodDescriptor_Store_ListOrderLines);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetKeyLayoutRequest,
 *   !proto.data.KeyLayout>}
 */
const methodDescriptor_Store_GetKeyLayout = new grpc.web.MethodDescriptor(
  '/data.Store/GetKeyLayout',
  grpc.web.MethodType.UNARY,
  proto.data.GetKeyLayoutRequest,
  proto.data.KeyLayout,
  /**
   * @param {!proto.data.GetKeyLayoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.KeyLayout.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetKeyLayoutRequest,
 *   !proto.data.KeyLayout>}
 */
const methodInfo_Store_GetKeyLayout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.KeyLayout,
  /**
   * @param {!proto.data.GetKeyLayoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.KeyLayout.deserializeBinary
);


/**
 * @param {!proto.data.GetKeyLayoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.KeyLayout)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.KeyLayout>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.StoreClient.prototype.getKeyLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Store/GetKeyLayout',
      request,
      metadata || {},
      methodDescriptor_Store_GetKeyLayout,
      callback);
};


/**
 * @param {!proto.data.GetKeyLayoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.KeyLayout>}
 *     Promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.getKeyLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/GetKeyLayout',
      request,
      metadata || {},
      methodDescriptor_Store_GetKeyLayout);
};


module.exports = proto.data;
