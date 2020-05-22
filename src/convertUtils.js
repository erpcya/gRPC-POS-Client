/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
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

const convertUtils = {
  convertPointOfSalesFromGRPC(pointOfSalesToConvert) {
    if (pointOfSalesToConvert) {
      const {
        convertBusinessPartnerFromGRPC,
        convertCurrencyFromGRPC,
        convertSalesRepresentativeFromGRPC
      } = require('@adempiere/grpc-core-client/src/convertCoreFunctionality.js');

      return {
        uuid: pointOfSalesToConvert.getUuid(),
        id: pointOfSalesToConvert.getId(),
        name: pointOfSalesToConvert.getName(),
        description: pointOfSalesToConvert.getDescription(),
        help: pointOfSalesToConvert.getHelp(),
        isModifyPrice: pointOfSalesToConvert.getIsmodifyprice(),
        isPOSRequiredPIN: pointOfSalesToConvert.getIsposrequiredpin(),
        salesRepresentative: convertSalesRepresentativeFromGRPC(
          pointOfSalesToConvert.getSalesrepresentative()
        ),
        templateBusinessPartner: convertBusinessPartnerFromGRPC(
          pointOfSalesToConvert.getTemplatebusinesspartner()
        ),
        priceListUuid: pointOfSalesToConvert.getPricelistuuid(),
        currency: convertCurrencyFromGRPC(
          pointOfSalesToConvert.getCurrency()
        )
      };
    }
    return {
      uuid: undefined,
      id: undefined,
      name: undefined,
      description: undefined,
      help: undefined,
      isModifyPrice: undefined,
      isPOSRequiredPIN: undefined,
      salesRepresentative: undefined,
      templateBusinessPartner: undefined,
      priceListUuid: undefined,
      currency: undefined
    };
  },

  convertOrderLineFromGRPC(orderLineToConvert) {
    if (orderLineToConvert) {
      const {
        convertChargeFromGRPC,
        convertProductFromGRPC,
        convertTaxRateFromGRPC,
        convertWarehouseFromGRPC
      } = require('@adempiere/grpc-core-client/src/convertCoreFunctionality.js');
      const { getDecimalFromValue } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

      return {
        uuid: orderLineToConvert.getUuid(),
        orderUuid: orderLineToConvert.getOrderuuid(),
        line: orderLineToConvert.getLine(),
        product: convertProductFromGRPC(
          orderLineToConvert.getProduct()
        ),
        charge: convertChargeFromGRPC(
          orderLineToConvert.getCharge()
        ),
        description: orderLineToConvert.getDescription(),
        lineDescription: orderLineToConvert.getLinedescription(),
        quantity: getDecimalFromValue(
          orderLineToConvert.getQuantity()
        ),
        price: getDecimalFromValue(
          orderLineToConvert.getPrice()
        ),
        discountRate: getDecimalFromValue(
          orderLineToConvert.getDiscountrate()
        ),
        lineNetAmount: getDecimalFromValue(
          orderLineToConvert.getLinenetamount()
        ),
        taxRate: convertTaxRateFromGRPC(
          orderLineToConvert.getTaxrate()
        ),
        warehouse: convertWarehouseFromGRPC(
          orderLineToConvert.getWarehouse()
        )
      };
    }
    return {
      uuid: undefined,
      orderUuid: undefined,
      line: undefined,
      product: undefined,
      description: undefined,
      lineDescription: undefined,
      quantity: undefined,
      price: undefined,
      discountRate: undefined,
      lineNetAmount: undefined,
      taxRate: undefined,
      warehouse: undefined
    };
  },

  convertOrderFromGRPC(orderToConvert) {
    if (orderToConvert) {
      const {
        convertDocumentStatusFromGRPC,
        getDecimalFromValue
      } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');
      const {
        convertDocumentTypeFromGRPC,
        convertSalesRepresentativeFromGRPC
      } = require('@adempiere/grpc-core-client/src/convertCoreFunctionality.js');

      return {
        uuid: orderToConvert.getUuid(),
        id: orderToConvert.getId(),
        documentNo: orderToConvert.getDocumentno(),
        documentType: convertDocumentTypeFromGRPC(
          orderToConvert.getDocumenttype(),
        ),
        salesRepresentative: convertSalesRepresentativeFromGRPC(
          orderToConvert.getSalesrepresentative()
        ),
        documentStatus: convertDocumentStatusFromGRPC(
          orderToConvert.getDocumentstatus()
        ),
        totalLines: getDecimalFromValue(
          orderToConvert.getTotallines()
        ),
        grandTotal: getDecimalFromValue(
          orderToConvert.getGrandtotal()
        ),
        dateOrdered: new Date(orderToConvert.getDateordered())
      };
    }
    return {
      uuid: undefined,
      id: undefined,
      documentNo: undefined,
      documentType: undefined,
      salesRepresentative: undefined,
      documentStatus: undefined,
      totalLines: undefined,
      grandTotal: undefined,
      dateOrdered: undefined
    };
  }

}

module.exports = convertUtils
