/**
 * @fileoverview gRPC-Web generated client stub for data
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var proto_core_functionality_pb = require('../proto/core_functionality_pb.js')

var proto_base_data_type_pb = require('../proto/base_data_type_pb.js')
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

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
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

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.PointOfSalesRequest,
 *   !proto.data.PointOfSales>}
 */
const methodInfo_Store_GetPointOfSales = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PointOfSales,
  /** @param {!proto.data.PointOfSalesRequest} request */
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
      methodInfo_Store_GetPointOfSales,
      callback);
};


/**
 * @param {!proto.data.PointOfSalesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PointOfSales>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.getPointOfSales =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/GetPointOfSales',
      request,
      metadata || {},
      methodInfo_Store_GetPointOfSales);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListPointOfSalesRequest,
 *   !proto.data.ListPointOfSalesResponse>}
 */
const methodInfo_Store_ListPointOfSales = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListPointOfSalesResponse,
  /** @param {!proto.data.ListPointOfSalesRequest} request */
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
      methodInfo_Store_ListPointOfSales,
      callback);
};


/**
 * @param {!proto.data.ListPointOfSalesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListPointOfSalesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.listPointOfSales =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/ListPointOfSales',
      request,
      metadata || {},
      methodInfo_Store_ListPointOfSales);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetProductPriceRequest,
 *   !proto.data.ProductPrice>}
 */
const methodInfo_Store_GetProductPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto_core_functionality_pb.ProductPrice,
  /** @param {!proto.data.GetProductPriceRequest} request */
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
      methodInfo_Store_GetProductPrice,
      callback);
};


/**
 * @param {!proto.data.GetProductPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ProductPrice>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.getProductPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/GetProductPrice',
      request,
      metadata || {},
      methodInfo_Store_GetProductPrice);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListProductPriceRequest,
 *   !proto.data.ListProductPriceResponse>}
 */
const methodInfo_Store_ListProductPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListProductPriceResponse,
  /** @param {!proto.data.ListProductPriceRequest} request */
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
      methodInfo_Store_ListProductPrice,
      callback);
};


/**
 * @param {!proto.data.ListProductPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListProductPriceResponse>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.listProductPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/ListProductPrice',
      request,
      metadata || {},
      methodInfo_Store_ListProductPrice);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateOrderRequest,
 *   !proto.data.Order>}
 */
const methodInfo_Store_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Order,
  /** @param {!proto.data.CreateOrderRequest} request */
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
      methodInfo_Store_CreateOrder,
      callback);
};


/**
 * @param {!proto.data.CreateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Order>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/CreateOrder',
      request,
      metadata || {},
      methodInfo_Store_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.DeleteOrderRequest,
 *   !proto.data.Empty>}
 */
const methodInfo_Store_DeleteOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Empty,
  /** @param {!proto.data.DeleteOrderRequest} request */
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
      methodInfo_Store_DeleteOrder,
      callback);
};


/**
 * @param {!proto.data.DeleteOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Empty>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.deleteOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/DeleteOrder',
      request,
      metadata || {},
      methodInfo_Store_DeleteOrder);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateOrderLineRequest,
 *   !proto.data.OrderLine>}
 */
const methodInfo_Store_CreateOrderLine = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.OrderLine,
  /** @param {!proto.data.CreateOrderLineRequest} request */
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
      methodInfo_Store_CreateOrderLine,
      callback);
};


/**
 * @param {!proto.data.CreateOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.OrderLine>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.createOrderLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/CreateOrderLine',
      request,
      metadata || {},
      methodInfo_Store_CreateOrderLine);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.DeleteOrderLineRequest,
 *   !proto.data.Empty>}
 */
const methodInfo_Store_DeleteOrderLine = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Empty,
  /** @param {!proto.data.DeleteOrderLineRequest} request */
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
      methodInfo_Store_DeleteOrderLine,
      callback);
};


/**
 * @param {!proto.data.DeleteOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Empty>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.deleteOrderLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/DeleteOrderLine',
      request,
      metadata || {},
      methodInfo_Store_DeleteOrderLine);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.UpdateOrderLineRequest,
 *   !proto.data.OrderLine>}
 */
const methodInfo_Store_UpdateOrderLine = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.OrderLine,
  /** @param {!proto.data.UpdateOrderLineRequest} request */
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
      methodInfo_Store_UpdateOrderLine,
      callback);
};


/**
 * @param {!proto.data.UpdateOrderLineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.OrderLine>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.updateOrderLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/UpdateOrderLine',
      request,
      metadata || {},
      methodInfo_Store_UpdateOrderLine);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetOrderRequest,
 *   !proto.data.Order>}
 */
const methodInfo_Store_GetOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Order,
  /** @param {!proto.data.GetOrderRequest} request */
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
      methodInfo_Store_GetOrder,
      callback);
};


/**
 * @param {!proto.data.GetOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Order>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.getOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/GetOrder',
      request,
      metadata || {},
      methodInfo_Store_GetOrder);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListOrdersRequest,
 *   !proto.data.ListOrdersResponse>}
 */
const methodInfo_Store_ListOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListOrdersResponse,
  /** @param {!proto.data.ListOrdersRequest} request */
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
      methodInfo_Store_ListOrders,
      callback);
};


/**
 * @param {!proto.data.ListOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListOrdersResponse>}
 *     A native promise that resolves to the response
 */
proto.data.StorePromiseClient.prototype.listOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Store/ListOrders',
      request,
      metadata || {},
      methodInfo_Store_ListOrders);
};


module.exports = proto.data;

