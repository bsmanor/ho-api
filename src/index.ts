import { IStatReport } from "./models/models";
import { fields } from "./models/params";

interface IGetStatsParams {
	fields: string[];
	filters?: string[];
	sort?: string;
	limit?: number;
	page?: number;
	totals?: boolean;
	currency?: string;
	data_start?: Date;
	data_end?: Date;
	hour_offset?: number;
}

class Call {
	public fields = fields;
	
	public _url = 'https://manor.api.hasoffers.com/Apiv3/json?NetworkToken=NETIlDlNCCAsW39apdfi33CrecceQR';
	
	public getStats(params: IGetStatsParams) {
		this._url = this._url.concat('&Target=Report&Method=getStats');
		this._url = this._url.concat(this._createQuery(params));
		console.log(this._url);
	}

  public getConversions() {	}
	
	private _createQuery(params: {}): string {
		let url = '';
		for(let p in params) {
			if(p === 'fields') {
				for(let field of params[p]) {
					url = url.concat(`&fields[]=${field}`)
				}
			}
		}
		return url;
	}

	private _initParams(method) {

	}
}

let call = new Call();
call.getStats({
	fields: [
		call.fields.Stat.clicks,
		call.fields.Stat.conversions
	]
});