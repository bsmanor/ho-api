import { IStatReport } from "./models";

export class Call {
    networkId: string;
    networkToken: string;
    url: string;
    target: Target;
    constructor(networkId: string, networkToken: string) {
        this.networkId = networkId;
        this.networkToken = networkToken;
        this.url = `https://${this.networkId}.api.hasoffers.com/Apiv3/json?NetworkToken=${this.networkToken}&`;
    }

    addQuery(query) {
        this.url.concat(query);
    }
}

interface Target {
    report: ReportTarget;
}

class ReportTarget {
    // getActiveCurrencies: GetActiveCurrencies;
    // getAffiliateCommissions: GetAffiliateCommissions;
    // getConversions: GetConversions;
    // getManagerCommissions: GetManagerCommissions;
    // getModSummaryLogs: GetModSummaryLogs;
    // getReferrals: GetReferrals;
    // getSubscriptions: GetSubscriptions;
    
    getStats(params: GetStatsParams) {
        let query = '';
        if (!params.fields) {
            throw 'fields are required!'
        } else {
            for(let i in params.fields) {
                query.concat(`&${i}=${params.fields[i]}`);
            }
        }
    }
}

interface GetActiveCurrencies {
    
}

interface GetAffiliateCommissions {

}

interface GetConversions {

}

interface GetManagerCommissions {

}

interface GetModSummaryLogs {

}

interface GetReferrals {

}

interface GetStatsParams {
    fields: IStatReport[];
    filters?: IStatReport[];
    sort?: IStatReport[];
    limit?: number;
    page?: number;
    totals?: boolean;
    currency?: string;
    data_start?: Date;
    data_end?: Date;
    hour_offset?: number;
}

interface GetSubscriptions {

}

let call = new Call('manor', 'NETIlDlNCCAsW39apdfi33CrecceQR');
