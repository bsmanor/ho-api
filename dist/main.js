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
        this._url = this._url.concat('&Target=Report&Method=getStats');
        this._url = this._url.concat(this._createQuery(params));
        console.log(this._url);
    };
    Call.prototype.getConversions = function () { };
    Call.prototype._createQuery = function (params) {
        var url = '';
        for (var p in params) {
            if (p === 'fields') {
                for (var _i = 0, _a = params[p]; _i < _a.length; _i++) {
                    var field = _a[_i];
                    url = url.concat("&fields[]=" + field);
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
        call.fields.Stat.clicks,
        call.fields.Stat.conversions
    ]
});

},{"./models/params":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = {
    ad_campaign_creative_id: 'Stat.ad_campaign_creative_id',
    ad_campaign_id: 'Stat.ad_campaign_id',
    advertiser_id: 'Stat.advertiser_id',
    advertiser_manager_id: 'Stat.advertiser_manager_id',
    affiliate_count: 'Stat.affiliate_count',
    affiliate_id: 'Stat.affiliate_id',
    affiliate_info1: 'Stat.affiliate_info1',
    affiliate_info2: 'Stat.affiliate_info2',
    affiliate_info3: 'Stat.affiliate_info3',
    affiliate_info4: 'Stat.affiliate_info4',
    affiliate_info5: 'Stat.affiliate_info5',
    affiliate_manager_id: 'Stat.affiliate_manager_id',
    browser_id: 'Stat.browser_id',
    city_name: 'Stat.city_name',
    clicks: 'Stat.clicks',
    conversions: 'Stat.conversions',
    count: 'Stat.count',
    country_code: 'Stat.country_code',
    cpa: 'Stat.cpa',
    cpc: 'Stat.cpc',
    cpm: 'Stat.cpm',
    creative_url_id: 'Stat.creative_url_id',
    ctr: 'Stat.ctr',
    date: 'Stat.date',
    device_brand: 'Stat.device_brand',
    device_model: 'Stat.device_model',
    device_os: 'Stat.device_os',
    device_os_version: 'Stat.device_os_version',
    epc: 'Stat.epc',
    erpc: 'Stat.erpc',
    goal_id: 'Stat.goal_id',
    gross_clicks: 'Stat.gross_clicks',
    gross_ctr: 'Stat.gross_ctr',
    hour: 'Stat.hour',
    impressions: 'Stat.impressions',
    ltr: 'Stat.ltr',
    mobile_carrier: 'Stat.mobile_carrier',
    month: 'Stat.month',
    offer_count: 'Stat.offer_count',
    offer_file_id: 'Stat.offer_file_id',
    offer_id: 'Stat.offer_id',
    offer_url_id: 'Stat.offer_url_id',
    payout: 'Stat.payout',
    payout_type: 'Stat.payout_type',
    profit: 'Stat.profit',
    region_code: 'Stat.region_code',
    revenue: 'Stat.revenue',
    revenue_type: 'Stat.revenue_type',
    rpa: 'Stat.rpa',
    rpc: 'Stat.rpc',
    rpm: 'Stat.rpm',
    sale_amount: 'Stat.sale_amount',
    source: 'Stat.source',
    unique_clicks: 'Stat.unique_clicks',
    unique_ctr: 'Stat.unique_ctr',
    week: 'Stat.week',
    year: 'Stat.year'
};
exports.fields = {
    'AdCampaign.name': 'Stat.AdCampaign.name',
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
    Stat: exports.Stat,
};

},{}]},{},[1]);
