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
  convertDecimalValue(value) {
    if (value) {
      return Number(value.getDecimalvalue());
    }
    return undefined;
  },

  convertProductPriceFromGRPC(productPriceToConvert) {
    if (productPriceToConvert) {
      return {
        currency: convertUtils.convertCurrencyFromGRPC(productPriceToConvert.getCurrency()),
        taxRate: convertUtils.convertTaxRateFromGRPC(productPriceToConvert.getTaxrate()),
        product: convertUtils.convertProductFromGRPC(productPriceToConvert.getProduct()),
        priceList: convertUtils.convertDecimalValue(productPriceToConvert.getPricelist()),
        priceStd: convertUtils.convertDecimalValue(productPriceToConvert.getPricestd()),
        priceLimit: convertUtils.convertDecimalValue(productPriceToConvert.getPricelimit()),
        priceListName: productPriceToConvert.getPricelistname(),
        isTaxIncluded: productPriceToConvert.getIstaxincluded(),
        validFrom: productPriceToConvert.getValidfrom(),
        pricePrecision: productPriceToConvert.getPriceprecision(),
        quantityOnHand: convertUtils.convertDecimalValue(productPriceToConvert.getQuantityonhand()),
        quantityReserved: convertUtils.convertDecimalValue(productPriceToConvert.getQuantityreserved()),
        quantityOrdered: convertUtils.convertDecimalValue(productPriceToConvert.getQuantityordered()),
        quantityAvailable: convertUtils.convertDecimalValue(productPriceToConvert.getQuantityavailable())
      };
    }
    return {
      product: undefined,
      currency: undefined,
      taxRate: undefined,
      priceList: undefined,
      priceStd: undefined,
      priceLimit: undefined,
      priceListName: undefined,
      isTaxIncluded: undefined,
      validFrom: undefined,
      pricePrecision: undefined,
      quantityOnHand: undefined,
      quantityReserved: undefined,
      quantityOrdered: undefined,
      quantityAvailable: undefined
    };
  },

  convertCurrencyFromGRPC(currencyToConvert) {
    if(currencyToConvert) {
      return {
        currencyId: currencyToConvert.getId(),
        currencyUuid: currencyToConvert.getUuid(),
        iSOCode: currencyToConvert.getIsocode(),
        curSymbol: currencyToConvert.getCursymbol(),
        description: currencyToConvert.getDescription(),
        stdPrecision: currencyToConvert.getStdprecision(),
        costingPrecision: currencyToConvert.getCostingprecision()
      };
    }
    return {
      currencyId: undefined,
      currencyUuid: undefined,
      iSOCode: undefined,
      curSymbol: undefined,
      description: undefined,
      stdPrecision: undefined,
      costingPrecision: undefined
    };
  },

  convertTaxRateFromGRPC(taxRateToConvert) {
    //  Tax rate
    if (taxRateToConvert) {
      return {
        name: taxRateToConvert.getName(),
        description: taxRateToConvert.getDescription(),
        taxIndicator: taxRateToConvert.getTaxindicator(),
        rate: convertUtils.convertDecimalValue(taxRateToConvert.getRate())
      };
    }
    return {
      name: undefined,
      description: undefined,
      taxIndicator: undefined,
      rate: undefined
    };
  },

  convertProductFromGRPC(productToConvert) {
    if (productToConvert) {
      return {
        uuid: productToConvert.getUuid(),
        id: productToConvert.getId(),
        value: productToConvert.getValue(),
        name: productToConvert.getName(),
        help: productToConvert.getHelp(),
        documentNote: productToConvert.getDocumentnote(),
        uomName: productToConvert.getUomname(),
        productType: productToConvert.getProducttype(),
        isStocked: productToConvert.getIsstocked(),
        isDropShip: productToConvert.getIsdropship(),
        isPurchased: productToConvert.getIspurchased(),
        isSold: productToConvert.getIssold(),
        imageURL: productToConvert.getImageurl(),
        productCategoryName: productToConvert.getProductcategoryname(),
        productGroupName: productToConvert.getProductgroupname(),
        productClassName: productToConvert.getProductclassname(),
        productClassificationName: productToConvert.getProductclassificationname(),
        weight: convertUtils.convertDecimalValue(productToConvert.getWeight()),
        volume: convertUtils.convertDecimalValue(productToConvert.getVolume()),
        upc: productToConvert.getUpc(),
        sku: productToConvert.getSku(),
        shelfWidth: productToConvert.getShelfwidth(),
        shelfHeight: convertUtils.convertDecimalValue(productToConvert.getShelfheight()),
        shelfDepth: productToConvert.getShelfdepth(),
        unitsPerPack: productToConvert.getUnitsperpack(),
        unitsPerPallet: convertUtils.convertDecimalValue(productToConvert.getUnitsperpallet()),
        guaranteeDays: productToConvert.getGuaranteedays(),
        descriptionURL: productToConvert.getDescriptionurl(),
        versionNo: productToConvert.getVersionno(),
        taxCategory: productToConvert.getTaxcategory(),
        description: productToConvert.getDescription()
      };
    }
    return {
      uuid: undefined,
      id: undefined,
      value: undefined,
      name: undefined,
      help: undefined,
      documentNote: undefined,
      uomName: undefined,
      productType: undefined,
      isStocked: undefined,
      isDropShip: undefined,
      isPurchased: undefined,
      isSold: undefined,
      imageURL: undefined,
      productCategoryName: undefined,
      productGroupName: undefined,
      productClassName: undefined,
      productClassificationName: undefined,
      weight: undefined,
      volume: undefined,
      upc: undefined,
      sku: undefined,
      shelfWidth: undefined,
      shelfHeight: undefined,
      shelfDepth: undefined,
      unitsPerPack: undefined,
      unitsPerPallet: undefined,
      guaranteeDays: undefined,
      descriptionURL: undefined,
      versionNo: undefined,
      taxCategory: undefined,
      description: undefined
    };
  },

  convertPointOfSalesFromGRPC(pointOfSalesToConvert) {
    if (pointOfSalesToConvert) {
      return {
        uuid: pointOfSalesToConvert.getUuid(),
        id: pointOfSalesToConvert.getId(),
        name: pointOfSalesToConvert.getName(),
        description: pointOfSalesToConvert.getDescription(),
        help: pointOfSalesToConvert.getHelp(),
        isModifyPrice: pointOfSalesToConvert.getIsmodifyprice(),
        isPOSRequiredPIN: pointOfSalesToConvert.getIsposrequirepin(),
        salesRepresentative: convertUtils.convertSalesRepresentativeFromGRPC(
          pointOfSalesToConvert.getSalesrepresentative()
        ),
        templateBusinessPartner: convertUtils.convertBusinessPartnerFromGRPC(
          pointOfSalesToConvert.getTemplatebusinesspartner()
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
      templateBusinessPartner: undefined
    };
  },

  convertSalesRepresentativeFromGRPC(salesRepresentativeToConvert) {
    if (salesRepresentativeToConvert) {
      return {
        uuid: salesRepresentativeToConvert.getUuid(),
        id: salesRepresentativeToConvert.getId(),
        name: salesRepresentativeToConvert.getName(),
        description: salesRepresentativeToConvert.getDescription()
      }
    }
    return {
      uuid: undefined,
      id: undefined,
      name: undefined,
      description: undefined
    }
  },

  // Business Partner
  convertBusinessPartnerFromGRPC(businessPartnerToConvert) {
    if (businessPartnerToConvert) {
      return {
        uuid: businessPartnerToConvert.getUuid(),
        id: businessPartnerToConvert.getId(),
        value: businessPartnerToConvert.getValue(),
        taxId: businessPartnerToConvert.getTaxid(),
        duns: businessPartnerToConvert.getDuns(),
        naics: businessPartnerToConvert.getNaics(),
        name: businessPartnerToConvert.getName(),
        lastName: businessPartnerToConvert.getLastname(),
        description: businessPartnerToConvert.getDescription()
      };
    }
    return {
      uuid: undefined,
      id: undefined,
      value: undefined,
      taxId: undefined,
      duns: undefined,
      naics: undefined,
      name: undefined,
      lastName: undefined,
      description: undefined
    };
  },

  convertDocumentTypeFromGRPC(documentTypeToConvert) {
    if (documentTypeToConvert) {
      return {
        uuid: documentTypeToConvert.getUuid(),
        id: documentTypeToConvert.getId(),
        name: documentTypeToConvert.getName(),
        printerName: documentTypeToConvert.getPrintername(),
        description: documentTypeToConvert.getDescription()
      };
    }
    return {
      uuid: undefined,
      id: undefined,
      name: undefined,
      printerName: undefined,
      description: undefined
    };
  },

  convertDocumentStatusFromGRPC(documentStatusToConvert) {
    if (documentStatusToConvert) {
      return {
        value: documentStatusToConvert.getValue(),
        name: documentStatusToConvert.getName(),
        description: documentStatusToConvert.getDescription()
      };
    }
    return {
      value: undefined,
      name: undefined,
      description: undefined
    };
  },

  convertOrderFromGRPC(orderToConvert) {
    if (orderToConvert) {
      return {
        uuid: orderToConvert.getUuid(),
        id: orderToConvert.getId(),
        documentNo: orderToConvert.getDocumentno(),
        documentType: convertUtils.convertDocumentTypeFromGRPC(
          orderToConvert.getDocumenttype(),
        ),
        salesRepresentative: convertUtils(
          orderToConvert.getSalesrepresentative()
        ),
        documentStatus: convertUtils.convertDocumentStatusFromGRPC(
          orderToConvert.getDocumentstatus()
        ),
        totalLines: convertUtils.convertDecimalValue(
          orderToConvert.getTotallines()
        ),
        grandTotal: convertUtils.convertDecimalValue(
          orderToConvert.getGrandtotal()
        )
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
      grandTotal: undefined
    };
  }
}

module.exports = convertUtils
