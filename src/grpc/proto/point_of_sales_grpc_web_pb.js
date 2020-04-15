/**
 * @fileoverview gRPC-Web generated client stub for data
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var proto_businessdata_pb = require('../proto/businessdata_pb.js')
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
proto.data.PointOfSalesServiceClient =
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
proto.data.PointOfSalesServicePromiseClient =
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
 *   !proto.data.GetProductPriceRequest,
 *   !proto.data.ProductPrice>}
 */
const methodInfo_PointOfSalesService_GetProductPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ProductPrice,
  /** @param {!proto.data.GetProductPriceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ProductPrice.deserializeBinary
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
proto.data.PointOfSalesServiceClient.prototype.getProductPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.PointOfSalesService/GetProductPrice',
      request,
      metadata || {},
      methodInfo_PointOfSalesService_GetProductPrice,
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
proto.data.PointOfSalesServicePromiseClient.prototype.getProductPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.PointOfSalesService/GetProductPrice',
      request,
      metadata || {},
      methodInfo_PointOfSalesService_GetProductPrice);
};


module.exports = proto.data;

