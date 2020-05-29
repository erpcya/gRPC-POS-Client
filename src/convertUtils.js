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
    return undefined;
  },

  convertOrderLineFromGRPC(orderLineToConvert) {
    if (orderLineToConvert) {
      const {
        convertChargeFromGRPC,
        convertProductFromGRPC,
        convertTaxRateFromGRPC,
        convertWarehouseFromGRPC
      } = require('@adempiere/grpc-core-client/src/convertCoreFunctionality.js');
      const { getDecimalFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

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
        quantity: getDecimalFromGRPC(
          orderLineToConvert.getQuantity()
        ),
        price: getDecimalFromGRPC(
          orderLineToConvert.getPrice()
        ),
        discountRate: getDecimalFromGRPC(
          orderLineToConvert.getDiscountrate()
        ),
        lineNetAmount: getDecimalFromGRPC(
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
    return undefined;
  },

  convertOrderFromGRPC(orderToConvert) {
    if (orderToConvert) {
      const {
        convertDocumentStatusFromGRPC,
        getDecimalFromGRPC
      } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');
      const {
        convertBusinessPartnerFromGRPC,
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
        totalLines: getDecimalFromGRPC(
          orderToConvert.getTotallines()
        ),
        grandTotal: getDecimalFromGRPC(
          orderToConvert.getGrandtotal()
        ),
        dateOrdered: new Date(orderToConvert.getDateordered()),
        businessPartner: convertBusinessPartnerFromGRPC(
          orderToConvert.getBusinesspartner()
        )
      };
    }
    return undefined;
  },

  convertKeyFromGRPC(keyToConvert) {
    if (keyToConvert) {
      const { getDecimalFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

      return {
        uuid: keyToConvert.getUuid(),
        id: keyToConvert.getId(),
        name: keyToConvert.getName(),
        description: keyToConvert.getDescription(),
        subKeyLayoutUuid: keyToConvert.getSubkeylayoutuuid(),
        color: keyToConvert.getColor(),
        sequence: keyToConvert.getSequence(),
        spanX: keyToConvert.getSpanx(),
        spanY: keyToConvert.getSpany(),
        productUuid: keyToConvert.getProductuuid(),
        quantity: getDecimalFromGRPC(
          keyToConvert.getQuantity()
        )
      };
    }
    return undefined;
  },

  convertKeyLayoutFromGRPC(keyLayoutToConvert) {
    if (keyLayoutToConvert) {
      return {
        uuid: keyLayoutToConvert.getUuid(),
        id: keyLayoutToConvert.getId(),
        name: keyLayoutToConvert.getName(),
        description: keyLayoutToConvert.getDescription(),
        help: keyLayoutToConvert.getHelp(),
        layoutType: keyLayoutToConvert.getLayouttype(),
        columns: keyLayoutToConvert.getColumns(),
        color: keyLayoutToConvert.getColor(),
        keysList: keyLayoutToConvert.getKeysList()
          .map(itemKey => {
            return convertUtils.convertKeyFromGRPC(itemKey)
          })
      };
    }
    return undefined;
  }

}

module.exports = convertUtils
