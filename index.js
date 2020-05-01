/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client                                      *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com                                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/
class PointOfSales {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} sessionUuid
   * @param {string} organizationUuid
   * @param {string} warehouseUuid
   * @param {string} language Languaje i18n
   */
  constructor({
    host,
    sessionUuid,
    organizationUuid,
    warehouseUuid,
    language = 'en_US',
  }) {
    this.sessionUuid = sessionUuid;
    this.host = host;
    this.language = language;
    this.organizationUuid = organizationUuid;
    this.warehouseUuid = warehouseUuid;
  }

  /**
   * Load gRPC Connection
   * @return {object} requestService Return request for get data
   */
  getService() {
    const grpc_promise = require('grpc-promise');
    const { StorePromiseClient } = require('./src/grpc/proto/point_of_sales_grpc_web_pb.js');
    const requestService = new StorePromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  getClientRequest() {
    const { ClientRequest } = require('./src/grpc/proto/core_functionality_pb.js');
    const clientRequest = new ClientRequest();
    clientRequest.setSessionuuid(this.sessionUuid);
    clientRequest.setLanguage(this.language);
    clientRequest.setOrganizationuuid(this.organizationUuid);
    clientRequest.setWarehouseuuid(this.warehouseUuid);
    return clientRequest;
  }

  /**
   * Get Country Information
   * @param {string} countryUuid, Universally Unique IDentifier from country
   * @param {number} countryId, IDentifier from country
   * @param {boolean} isConvert
   * @param {string}  formatToConvert
   * @return {object} Entity with records
   */
  getProductPrice({
    searchValue,
    upc,
    value,
    name,
    priceListUuid,
    businessPartnerUuid,
    warehouseUuid,
    validFrom,
    isConvert = true,
    formatToConvert = 'object' }) {
    const { GetProductPriceRequest } = require('./src/grpc/proto/point_of_sales_pb.js');
    const request = new GetProductPriceRequest();
    request.setClientrequest(this.getClientRequest());
    if(searchValue) {
      request.setSearchvalue(searchValue);
    }
    if(upc) {
      request.setUpc(upc);
    }
    if(value) {
      request.setValue(value);
    }
    if(name) {
      request.setName(name);
    }
    if(priceListUuid) {
      request.setPricelistuuid(priceListUuid);
    }
    if(businessPartnerUuid) {
      request.setBusinesspartneruuid(businessPartnerUuid);
    }
    if(warehouseUuid) {
      request.setWarehouseuuid(warehouseUuid);
    }
    if(validFrom) {
      request.setValidfrom(validFrom);
    }
    //
    return this.getService().getProductPrice(request)
    .then(productPriceResponse => {
      if (isConvert) {
        const { convertProductPriceFromGRPC } = require('./src/convertUtils');
        return convertProductPriceFromGRPC(productPriceResponse);
      }
      return productPriceResponse;
    });
  }
}

module.exports = PointOfSales;
