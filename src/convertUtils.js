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
  convertProductPriceFromGRPC({ productPriceToConvert, formatToConvert = 'object' }) {
    if (productPriceToConvert) {
      var currency;
      var taxRate;
      var product;
      //  Currency
      if(productPriceToConvert.getCurrency()) {
        currency = {
          currencyId: productPriceToConvert.getCurrency().getId(),
          currencyUuid: productPriceToConvert.getCurrency().getUuid(),
          iSOCode: productPriceToConvert.getCurrency().getIsocode(),
          curSymbol: productPriceToConvert.getCurrency().getCursymbol(),
          description: productPriceToConvert.getCurrency().getDescription(),
          stdPrecision: productPriceToConvert.getCurrency().getStdprecision(),
          costingPrecision: productPriceToConvert.getCurrency().getCostingprecision()
        }
      } else {
        currency = {
          currencyId: undefined,
          currencyUuid: undefined,
          iSOCode: undefined,
          curSymbol: undefined,
          description: undefined,
          stdPrecision: undefined,
          costingPrecision: undefined
        }
      }
      //  Tax rate
      if(productPriceToConvert.getTaxrate()) {
        taxRate = {
          name: productPriceToConvert.getTaxrate().getName(),
          description: productPriceToConvert.getTaxrate().getDescription(),
          taxIndicator: productPriceToConvert.getTaxrate().getTaxindicator(),
          rate: productPriceToConvert.getTaxrate().getRate()
        }
      } else {
        taxRate = {
          name: undefined,
          description: undefined,
          taxIndicator: undefined,
          rate: undefined
        }
      }
      //  Product
      if(productPriceToConvert.getProduct()) {
        product = {
          uuid: productPriceToConvert.getProduct().getUuid(),
          id: productPriceToConvert.getProduct().getId(),
          value: productPriceToConvert.getProduct().getValue(),
          name: productPriceToConvert.getProduct().getName(),
          help: productPriceToConvert.getProduct().getHelp(),
          documentNote: productPriceToConvert.getProduct().getDocumentnote(),
          uomName: productPriceToConvert.getProduct().getUomname(),
          productType: productPriceToConvert.getProduct().getProducttype(),
          isStocked: productPriceToConvert.getProduct().getIsstocked(),
          isDropShip: productPriceToConvert.getProduct().getIsdropship(),
          isPurchased: productPriceToConvert.getProduct().getIspurchased(),
          isSold: productPriceToConvert.getProduct().getIssold(),
          imageURL: productPriceToConvert.getProduct().getImageurl(),
          productCategoryName: productPriceToConvert.getProduct().getProductcategoryname(),
          productGroupName: productPriceToConvert.getProduct().getProductgroupname(),
          productClassName: productPriceToConvert.getProduct().getProductclassname(),
          productClassificationName: productPriceToConvert.getProduct().getProductclassificationname(),
          weight: productPriceToConvert.getProduct().getWeight(),
          volume: productPriceToConvert.getProduct().getVolume(),
          upc: productPriceToConvert.getProduct().getUpc(),
          sku: productPriceToConvert.getProduct().getSku(),
          shelfWidth: productPriceToConvert.getProduct().getShelfwidth(),
          shelfHeight: productPriceToConvert.getProduct().getShelfheight(),
          shelfDepth: productPriceToConvert.getProduct().getShelfdepth(),
          unitsPerPack: productPriceToConvert.getProduct().getUnitsperpack(),
          unitsPerPallet: productPriceToConvert.getProduct().getUnitsperpallet(),
          guaranteeDays: productPriceToConvert.getProduct().getGuaranteedays(),
          descriptionURL: productPriceToConvert.getProduct().getDescriptionurl(),
          versionNo: productPriceToConvert.getProduct().getVersionno(),
          taxCategory: productPriceToConvert.getProduct().getTaxcategory(),
          description: productPriceToConvert.getProduct().getDescription()
        }
      } else {
        product = {
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
        }
      }
      return {
        product: product,
        currency: currency,
        taxRate: taxRate,
        priceList: productPriceToConvert.getPricelist(),
        priceStd: productPriceToConvert.getPricestd(),
        priceLimit: productPriceToConvert.getPricelimit(),
        priceListName: productPriceToConvert.getPricelistname(),
        isTaxIncluded: productPriceToConvert.getIstaxincluded(),
        validFrom: productPriceToConvert.getValidfrom(),
        pricePrecision: productPriceToConvert.getPriceprecision()
      };
    }
    return {
      product: product,
      currency: currency,
      taxRate: taxRate,
      priceList: undefined,
      priceStd: undefined,
      priceLimit: undefined,
      priceListName: undefined,
      isTaxIncluded: undefined,
      validFrom: undefined,
      pricePrecision: undefined
    };
  }
}

  module.exports = convertUtils
