(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var params_1 = require("./models/params");
var Call = /** @class */ (function () {
    function Call() {
        this.fields = params_1.fields;
        this._url = 'https://manor.api.hasoffers.com/Apiv3/json?NetworkToken=NETIlDlNCCAsW39apdfi33CrecceQR';
    }
    Call.prototype.getStats = function (params) {
        this._url.concat(this._createQuery(params));
        console.log(this._url);
    };
    Call.prototype.getConversions = function () { };
    Call.prototype._createQuery = function (params) {
        var url = '';
        for (var p in params) {
            if (p === 'fields') {
                for (var _i = 0, _a = params[p]; _i < _a.length; _i++) {
                    var field = _a[_i];
                    url.concat("&fields[]=" + field);
                }
            }
        }
        return url;
    };
    Call.prototype._initParams = function (method) {
    };
    return Call;
}());
var call = new Call();
call.getStats({
    fields: [
        call.fields.stat.clicks,
        call.fields.stat.conversions
    ]
});

},{"./models/params":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = {
    ad_campaign_creative_id: 'ad_campaign_creative_id',
    ad_campaign_id: 'ad_campaign_id',
    advertiser_id: 'advertiser_id',
    advertiser_manager_id: 'advertiser_manager_id',
    affiliate_count: 'affiliate_count',
    affiliate_id: 'affiliate_id',
    affiliate_info1: 'affiliate_info1',
    affiliate_info2: 'affiliate_info2',
    affiliate_info3: 'affiliate_info3',
    affiliate_info4: 'affiliate_info4',
    affiliate_info5: 'affiliate_info5',
    affiliate_manager_id: 'affiliate_manager_id',
    browser_id: 'browser_id',
    city_name: 'city_name',
    clicks: 'clicks',
    conversions: 'conversions',
    count: 'count',
    country_code: 'country_code',
    cpa: 'cpa',
    cpc: 'cpc',
    cpm: 'cpm',
    creative_url_id: 'creative_url_id',
    ctr: 'ctr',
    date: 'date',
    device_brand: 'device_brand',
    device_model: 'device_model',
    device_os: 'device_os',
    device_os_version: 'device_os_version',
    epc: 'epc',
    erpc: 'erpc',
    goal_id: 'goal_id',
    gross_clicks: 'gross_clicks',
    gross_ctr: 'gross_ctr',
    hour: 'hour',
    impressions: 'impressions',
    ltr: 'ltr',
    mobile_carrier: 'mobile_carrier',
    month: 'month',
    offer_count: 'offer_count',
    offer_file_id: 'offer_file_id',
    offer_id: 'offer_id',
    offer_url_id: 'offer_url_id',
    payout: 'payout',
    payout_type: 'payout_type',
    profit: 'profit',
    region_code: 'region_code',
    revenue: 'revenue',
    revenue_type: 'revenue_type',
    rpa: 'rpa',
    rpc: 'rpc',
    rpm: 'rpm',
    sale_amount: 'sale_amount',
    source: 'source',
    unique_clicks: 'unique_clicks',
    unique_ctr: 'unique_ctr',
    week: 'week',
    year: 'year'
};
exports.fields = {
    'AdCampaign.name': 'AdCampaign.name',
    'Advertiser.company': 'Advertiser.company',
    'Advertiser.ref_id': 'Advertiser.ref_id',
    'AdvertiserManager.full_name': 'AdvertiserManager.full_name',
    'AdvertiserTag.name': 'AdvertiserTag.name',
    'Affiliate.company': 'Affiliate.company',
    'Affiliate.ref_id': 'Affiliate.ref_id',
    'AffiliateManager.full_name': 'AffiliateManager.full_name',
    'AffiliateTag.name': 'AffiliateTag.name',
    'Browser.display_name': 'Browser.display_name',
    'Category.id': 'Category.id',
    'Category.name': 'Category.name',
    'Country.name': 'Country.name',
    'Goal.name': 'Goal.name',
    'Offer.display_advertiser': 'Offer.display_advertiser',
    'Offer.name': 'Offer.name',
    'Offer.ref_id': 'Offer.ref_id',
    'OfferChannel.name': 'OfferChannel.name',
    'OfferConversionType.name': 'OfferConversionType.name',
    'OfferFile.display': 'OfferFile.display',
    'OfferIncentive.name': 'OfferIncentive.name',
    'OfferMediaPlacement.name': 'OfferMediaPlacement.name',
    'OfferOperatingSystem.name': 'OfferOperatingSystem.name',
    'OfferUrl.name': 'OfferUrl.name',
    'OfferUrl.preview_url': 'OfferUrl.preview_url',
    'OfferVertical.name': 'OfferVertical.name',
    'Region.name': 'Region.name',
    stat: exports.Stat,
};

},{}]},{},[1]);
