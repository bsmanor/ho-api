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
