"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Call = /** @class */ (function () {
    function Call(networkId, networkToken) {
        this.networkId = networkId;
        this.networkToken = networkToken;
        this.url = "https://" + this.networkId + ".api.hasoffers.com/Apiv3/json?NetworkToken=" + this.networkToken + "&";
    }
    Call.prototype.addQuery = function (query) {
        this.url.concat(query);
    };
    return Call;
}());
exports.Call = Call;
var ReportTarget = /** @class */ (function () {
    function ReportTarget() {
    }
    // getActiveCurrencies: GetActiveCurrencies;
    // getAffiliateCommissions: GetAffiliateCommissions;
    // getConversions: GetConversions;
    // getManagerCommissions: GetManagerCommissions;
    // getModSummaryLogs: GetModSummaryLogs;
    // getReferrals: GetReferrals;
    // getSubscriptions: GetSubscriptions;
    ReportTarget.prototype.getStats = function (params) {
        var query = '';
        if (!params.fields) {
            throw 'fields are required!';
        }
        else {
            for (var i in params.fields) {
                query.concat("&" + i + "=" + params.fields[i]);
            }
        }
    };
    return ReportTarget;
}());
var call = new Call('manor', 'NETIlDlNCCAsW39apdfi33CrecceQR');
