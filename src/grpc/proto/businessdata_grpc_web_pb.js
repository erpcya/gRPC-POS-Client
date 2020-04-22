/**
 * @fileoverview gRPC-Web generated client stub for data
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.data = require('./businessdata_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.BusinessDataServiceClient =
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
proto.data.BusinessDataServicePromiseClient =
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
 *   !proto.data.GetEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_BusinessDataService_GetEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Entity,
  /** @param {!proto.data.GetEntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Entity.deserializeBinary
);


/**
 * @param {!proto.data.GetEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.getEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/GetEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetEntity,
      callback);
};


/**
 * @param {!proto.data.GetEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.getEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/GetEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetEntity);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_BusinessDataService_CreateEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Entity,
  /** @param {!proto.data.CreateEntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Entity.deserializeBinary
);


/**
 * @param {!proto.data.CreateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.createEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/CreateEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_CreateEntity,
      callback);
};


/**
 * @param {!proto.data.CreateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.createEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/CreateEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_CreateEntity);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.UpdateEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_BusinessDataService_UpdateEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Entity,
  /** @param {!proto.data.UpdateEntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Entity.deserializeBinary
);


/**
 * @param {!proto.data.UpdateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.updateEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/UpdateEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_UpdateEntity,
      callback);
};


/**
 * @param {!proto.data.UpdateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.updateEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/UpdateEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_UpdateEntity);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.DeleteEntityRequest,
 *   !proto.data.Empty>}
 */
const methodInfo_BusinessDataService_DeleteEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Empty,
  /** @param {!proto.data.DeleteEntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Empty.deserializeBinary
);


/**
 * @param {!proto.data.DeleteEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.deleteEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/DeleteEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_DeleteEntity,
      callback);
};


/**
 * @param {!proto.data.DeleteEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Empty>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.deleteEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/DeleteEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_DeleteEntity);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.RollbackEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_BusinessDataService_RollbackEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Entity,
  /** @param {!proto.data.RollbackEntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Entity.deserializeBinary
);


/**
 * @param {!proto.data.RollbackEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.rollbackEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/RollbackEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_RollbackEntity,
      callback);
};


/**
 * @param {!proto.data.RollbackEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.rollbackEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/RollbackEntity',
      request,
      metadata || {},
      methodInfo_BusinessDataService_RollbackEntity);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListEntitiesRequest,
 *   !proto.data.ListEntitiesResponse>}
 */
const methodInfo_BusinessDataService_ListEntities = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListEntitiesResponse,
  /** @param {!proto.data.ListEntitiesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListEntitiesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListEntities',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListEntities,
      callback);
};


/**
 * @param {!proto.data.ListEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListEntitiesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListEntities',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListEntities);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetLookupItemRequest,
 *   !proto.data.LookupItem>}
 */
const methodInfo_BusinessDataService_GetLookupItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.LookupItem,
  /** @param {!proto.data.GetLookupItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.LookupItem.deserializeBinary
);


/**
 * @param {!proto.data.GetLookupItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.LookupItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.LookupItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.getLookupItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/GetLookupItem',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetLookupItem,
      callback);
};


/**
 * @param {!proto.data.GetLookupItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.LookupItem>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.getLookupItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/GetLookupItem',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetLookupItem);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListLookupItemsRequest,
 *   !proto.data.ListLookupItemsResponse>}
 */
const methodInfo_BusinessDataService_ListLookupItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListLookupItemsResponse,
  /** @param {!proto.data.ListLookupItemsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListLookupItemsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListLookupItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListLookupItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListLookupItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listLookupItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListLookupItems',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListLookupItems,
      callback);
};


/**
 * @param {!proto.data.ListLookupItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListLookupItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listLookupItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListLookupItems',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListLookupItems);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.RunCalloutRequest,
 *   !proto.data.Callout>}
 */
const methodInfo_BusinessDataService_RunCallout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Callout,
  /** @param {!proto.data.RunCalloutRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Callout.deserializeBinary
);


/**
 * @param {!proto.data.RunCalloutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Callout)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Callout>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.runCallout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/RunCallout',
      request,
      metadata || {},
      methodInfo_BusinessDataService_RunCallout,
      callback);
};


/**
 * @param {!proto.data.RunCalloutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Callout>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.runCallout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/RunCallout',
      request,
      metadata || {},
      methodInfo_BusinessDataService_RunCallout);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.RunBusinessProcessRequest,
 *   !proto.data.ProcessLog>}
 */
const methodInfo_BusinessDataService_RunBusinessProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ProcessLog,
  /** @param {!proto.data.RunBusinessProcessRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ProcessLog.deserializeBinary
);


/**
 * @param {!proto.data.RunBusinessProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ProcessLog)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ProcessLog>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.runBusinessProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/RunBusinessProcess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_RunBusinessProcess,
      callback);
};


/**
 * @param {!proto.data.RunBusinessProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ProcessLog>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.runBusinessProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/RunBusinessProcess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_RunBusinessProcess);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListBrowserItemsRequest,
 *   !proto.data.ListBrowserItemsResponse>}
 */
const methodInfo_BusinessDataService_ListBrowserItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListBrowserItemsResponse,
  /** @param {!proto.data.ListBrowserItemsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListBrowserItemsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListBrowserItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListBrowserItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListBrowserItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listBrowserItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListBrowserItems',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListBrowserItems,
      callback);
};


/**
 * @param {!proto.data.ListBrowserItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListBrowserItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listBrowserItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListBrowserItems',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListBrowserItems);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListRecentItemsRequest,
 *   !proto.data.ListRecentItemsResponse>}
 */
const methodInfo_BusinessDataService_ListRecentItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListRecentItemsResponse,
  /** @param {!proto.data.ListRecentItemsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecentItemsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListRecentItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListRecentItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListRecentItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listRecentItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListRecentItems',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListRecentItems,
      callback);
};


/**
 * @param {!proto.data.ListRecentItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListRecentItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listRecentItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListRecentItems',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListRecentItems);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListReferencesRequest,
 *   !proto.data.ListReferencesResponse>}
 */
const methodInfo_BusinessDataService_ListReferences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListReferencesResponse,
  /** @param {!proto.data.ListReferencesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListReferencesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListReferencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListReferencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listReferences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListReferences',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListReferences,
      callback);
};


/**
 * @param {!proto.data.ListReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListReferencesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listReferences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListReferences',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListReferences);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetDefaultValueRequest,
 *   !proto.data.Value>}
 */
const methodInfo_BusinessDataService_GetDefaultValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Value,
  /** @param {!proto.data.GetDefaultValueRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Value.deserializeBinary
);


/**
 * @param {!proto.data.GetDefaultValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.getDefaultValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/GetDefaultValue',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetDefaultValue,
      callback);
};


/**
 * @param {!proto.data.GetDefaultValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Value>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.getDefaultValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/GetDefaultValue',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetDefaultValue);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetContextInfoValueRequest,
 *   !proto.data.ContextInfoValue>}
 */
const methodInfo_BusinessDataService_GetContextInfoValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ContextInfoValue,
  /** @param {!proto.data.GetContextInfoValueRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ContextInfoValue.deserializeBinary
);


/**
 * @param {!proto.data.GetContextInfoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ContextInfoValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ContextInfoValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.getContextInfoValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/GetContextInfoValue',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetContextInfoValue,
      callback);
};


/**
 * @param {!proto.data.GetContextInfoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ContextInfoValue>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.getContextInfoValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/GetContextInfoValue',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetContextInfoValue);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodInfo_BusinessDataService_GetPrivateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PrivateAccess,
  /** @param {!proto.data.GetPrivateAccessRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @param {!proto.data.GetPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.PrivateAccess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.PrivateAccess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.getPrivateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/GetPrivateAccess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetPrivateAccess,
      callback);
};


/**
 * @param {!proto.data.GetPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PrivateAccess>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.getPrivateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/GetPrivateAccess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetPrivateAccess);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.LockPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodInfo_BusinessDataService_LockPrivateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PrivateAccess,
  /** @param {!proto.data.LockPrivateAccessRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @param {!proto.data.LockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.PrivateAccess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.PrivateAccess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.lockPrivateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/LockPrivateAccess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_LockPrivateAccess,
      callback);
};


/**
 * @param {!proto.data.LockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PrivateAccess>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.lockPrivateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/LockPrivateAccess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_LockPrivateAccess);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.UnlockPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodInfo_BusinessDataService_UnlockPrivateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PrivateAccess,
  /** @param {!proto.data.UnlockPrivateAccessRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @param {!proto.data.UnlockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.PrivateAccess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.PrivateAccess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.unlockPrivateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/UnlockPrivateAccess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_UnlockPrivateAccess,
      callback);
};


/**
 * @param {!proto.data.UnlockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PrivateAccess>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.unlockPrivateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/UnlockPrivateAccess',
      request,
      metadata || {},
      methodInfo_BusinessDataService_UnlockPrivateAccess);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListFavoritesRequest,
 *   !proto.data.ListFavoritesResponse>}
 */
const methodInfo_BusinessDataService_ListFavorites = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListFavoritesResponse,
  /** @param {!proto.data.ListFavoritesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListFavoritesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListFavoritesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListFavoritesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListFavoritesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listFavorites =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListFavorites',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListFavorites,
      callback);
};


/**
 * @param {!proto.data.ListFavoritesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListFavoritesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listFavorites =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListFavorites',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListFavorites);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListPendingDocumentsRequest,
 *   !proto.data.ListPendingDocumentsResponse>}
 */
const methodInfo_BusinessDataService_ListPendingDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListPendingDocumentsResponse,
  /** @param {!proto.data.ListPendingDocumentsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPendingDocumentsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListPendingDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListPendingDocumentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListPendingDocumentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listPendingDocuments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListPendingDocuments',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListPendingDocuments,
      callback);
};


/**
 * @param {!proto.data.ListPendingDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListPendingDocumentsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listPendingDocuments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListPendingDocuments',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListPendingDocuments);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListPrintFormatsRequest,
 *   !proto.data.ListPrintFormatsResponse>}
 */
const methodInfo_BusinessDataService_ListPrintFormats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListPrintFormatsResponse,
  /** @param {!proto.data.ListPrintFormatsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPrintFormatsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListPrintFormatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListPrintFormatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListPrintFormatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listPrintFormats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListPrintFormats',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListPrintFormats,
      callback);
};


/**
 * @param {!proto.data.ListPrintFormatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListPrintFormatsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listPrintFormats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListPrintFormats',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListPrintFormats);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListReportViewsRequest,
 *   !proto.data.ListReportViewsResponse>}
 */
const methodInfo_BusinessDataService_ListReportViews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListReportViewsResponse,
  /** @param {!proto.data.ListReportViewsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListReportViewsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListReportViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListReportViewsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListReportViewsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listReportViews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListReportViews',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListReportViews,
      callback);
};


/**
 * @param {!proto.data.ListReportViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListReportViewsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listReportViews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListReportViews',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListReportViews);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDrillTablesRequest,
 *   !proto.data.ListDrillTablesResponse>}
 */
const methodInfo_BusinessDataService_ListDrillTables = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDrillTablesResponse,
  /** @param {!proto.data.ListDrillTablesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDrillTablesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDrillTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDrillTablesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDrillTablesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listDrillTables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListDrillTables',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDrillTables,
      callback);
};


/**
 * @param {!proto.data.ListDrillTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDrillTablesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listDrillTables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListDrillTables',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDrillTables);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetReportOutputRequest,
 *   !proto.data.ReportOutput>}
 */
const methodInfo_BusinessDataService_GetReportOutput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ReportOutput,
  /** @param {!proto.data.GetReportOutputRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ReportOutput.deserializeBinary
);


/**
 * @param {!proto.data.GetReportOutputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ReportOutput)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ReportOutput>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.getReportOutput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/GetReportOutput',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetReportOutput,
      callback);
};


/**
 * @param {!proto.data.GetReportOutputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ReportOutput>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.getReportOutput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/GetReportOutput',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetReportOutput);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDashboardsRequest,
 *   !proto.data.ListDashboardsResponse>}
 */
const methodInfo_BusinessDataService_ListDashboards = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDashboardsResponse,
  /** @param {!proto.data.ListDashboardsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDashboardsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDashboardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDashboardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDashboardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listDashboards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListDashboards',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDashboards,
      callback);
};


/**
 * @param {!proto.data.ListDashboardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDashboardsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listDashboards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListDashboards',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDashboards);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListLanguagesRequest,
 *   !proto.data.ListLanguagesResponse>}
 */
const methodInfo_BusinessDataService_ListLanguages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListLanguagesResponse,
  /** @param {!proto.data.ListLanguagesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListLanguagesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListLanguagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListLanguagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listLanguages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListLanguages',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListLanguages,
      callback);
};


/**
 * @param {!proto.data.ListLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListLanguagesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listLanguages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListLanguages',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListLanguages);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListTranslationsRequest,
 *   !proto.data.ListTranslationsResponse>}
 */
const methodInfo_BusinessDataService_ListTranslations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListTranslationsResponse,
  /** @param {!proto.data.ListTranslationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListTranslationsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListTranslationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListTranslationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListTranslationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listTranslations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListTranslations',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListTranslations,
      callback);
};


/**
 * @param {!proto.data.ListTranslationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListTranslationsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listTranslations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListTranslations',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListTranslations);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListProcessLogsRequest,
 *   !proto.data.ListProcessLogsResponse>}
 */
const methodInfo_BusinessDataService_ListProcessLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListProcessLogsResponse,
  /** @param {!proto.data.ListProcessLogsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListProcessLogsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListProcessLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListProcessLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListProcessLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listProcessLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListProcessLogs',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListProcessLogs,
      callback);
};


/**
 * @param {!proto.data.ListProcessLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListProcessLogsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listProcessLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListProcessLogs',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListProcessLogs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListRecordLogsRequest,
 *   !proto.data.ListRecordLogsResponse>}
 */
const methodInfo_BusinessDataService_ListRecordLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListRecordLogsResponse,
  /** @param {!proto.data.ListRecordLogsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecordLogsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListRecordLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListRecordLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListRecordLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listRecordLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListRecordLogs',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListRecordLogs,
      callback);
};


/**
 * @param {!proto.data.ListRecordLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListRecordLogsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listRecordLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListRecordLogs',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListRecordLogs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListRecordChatsRequest,
 *   !proto.data.ListRecordChatsResponse>}
 */
const methodInfo_BusinessDataService_ListRecordChats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListRecordChatsResponse,
  /** @param {!proto.data.ListRecordChatsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecordChatsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListRecordChatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListRecordChatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListRecordChatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listRecordChats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListRecordChats',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListRecordChats,
      callback);
};


/**
 * @param {!proto.data.ListRecordChatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListRecordChatsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listRecordChats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListRecordChats',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListRecordChats);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListChatEntriesRequest,
 *   !proto.data.ListChatEntriesResponse>}
 */
const methodInfo_BusinessDataService_ListChatEntries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListChatEntriesResponse,
  /** @param {!proto.data.ListChatEntriesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListChatEntriesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListChatEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListChatEntriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListChatEntriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listChatEntries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListChatEntries',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListChatEntries,
      callback);
};


/**
 * @param {!proto.data.ListChatEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListChatEntriesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listChatEntries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListChatEntries',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListChatEntries);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListWorkflowLogsRequest,
 *   !proto.data.ListWorkflowLogsResponse>}
 */
const methodInfo_BusinessDataService_ListWorkflowLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListWorkflowLogsResponse,
  /** @param {!proto.data.ListWorkflowLogsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListWorkflowLogsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListWorkflowLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListWorkflowLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListWorkflowLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listWorkflowLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListWorkflowLogs',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListWorkflowLogs,
      callback);
};


/**
 * @param {!proto.data.ListWorkflowLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListWorkflowLogsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listWorkflowLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListWorkflowLogs',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListWorkflowLogs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListWorkflowsRequest,
 *   !proto.data.ListWorkflowsResponse>}
 */
const methodInfo_BusinessDataService_ListWorkflows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListWorkflowsResponse,
  /** @param {!proto.data.ListWorkflowsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListWorkflowsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListWorkflowsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListWorkflowsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listWorkflows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListWorkflows',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListWorkflows,
      callback);
};


/**
 * @param {!proto.data.ListWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListWorkflowsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listWorkflows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListWorkflows',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListWorkflows);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateChatEntryRequest,
 *   !proto.data.ChatEntry>}
 */
const methodInfo_BusinessDataService_CreateChatEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ChatEntry,
  /** @param {!proto.data.CreateChatEntryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ChatEntry.deserializeBinary
);


/**
 * @param {!proto.data.CreateChatEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ChatEntry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ChatEntry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.createChatEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/CreateChatEntry',
      request,
      metadata || {},
      methodInfo_BusinessDataService_CreateChatEntry,
      callback);
};


/**
 * @param {!proto.data.CreateChatEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ChatEntry>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.createChatEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/CreateChatEntry',
      request,
      metadata || {},
      methodInfo_BusinessDataService_CreateChatEntry);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDocumentActionsRequest,
 *   !proto.data.ListDocumentActionsResponse>}
 */
const methodInfo_BusinessDataService_ListDocumentActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDocumentActionsResponse,
  /** @param {!proto.data.ListDocumentActionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDocumentActionsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDocumentActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDocumentActionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDocumentActionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listDocumentActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListDocumentActions',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDocumentActions,
      callback);
};


/**
 * @param {!proto.data.ListDocumentActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDocumentActionsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listDocumentActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListDocumentActions',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDocumentActions);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDocumentStatusesRequest,
 *   !proto.data.ListDocumentStatusesResponse>}
 */
const methodInfo_BusinessDataService_ListDocumentStatuses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDocumentStatusesResponse,
  /** @param {!proto.data.ListDocumentStatusesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDocumentStatusesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDocumentStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDocumentStatusesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDocumentStatusesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listDocumentStatuses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListDocumentStatuses',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDocumentStatuses,
      callback);
};


/**
 * @param {!proto.data.ListDocumentStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDocumentStatusesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listDocumentStatuses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListDocumentStatuses',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListDocumentStatuses);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetCountryRequest,
 *   !proto.data.Country>}
 */
const methodInfo_BusinessDataService_GetCountry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Country,
  /** @param {!proto.data.GetCountryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Country.deserializeBinary
);


/**
 * @param {!proto.data.GetCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Country)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Country>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.getCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/GetCountry',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetCountry,
      callback);
};


/**
 * @param {!proto.data.GetCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Country>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.getCountry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/GetCountry',
      request,
      metadata || {},
      methodInfo_BusinessDataService_GetCountry);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListOrganizationsRequest,
 *   !proto.data.ListOrganizationsResponse>}
 */
const methodInfo_BusinessDataService_ListOrganizations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListOrganizationsResponse,
  /** @param {!proto.data.ListOrganizationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListOrganizationsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListOrganizationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListOrganizationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListOrganizations',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListOrganizations,
      callback);
};


/**
 * @param {!proto.data.ListOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListOrganizationsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListOrganizations',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListOrganizations);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListWarehousesRequest,
 *   !proto.data.ListWarehousesResponse>}
 */
const methodInfo_BusinessDataService_ListWarehouses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListWarehousesResponse,
  /** @param {!proto.data.ListWarehousesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListWarehousesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListWarehousesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListWarehousesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListWarehousesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataServiceClient.prototype.listWarehouses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessDataService/ListWarehouses',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListWarehouses,
      callback);
};


/**
 * @param {!proto.data.ListWarehousesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListWarehousesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataServicePromiseClient.prototype.listWarehouses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessDataService/ListWarehouses',
      request,
      metadata || {},
      methodInfo_BusinessDataService_ListWarehouses);
};


module.exports = proto.data;

