export interface AdCampaign {
    account_id: number | null;
    affiliate_access: boolean | null;
    custom_weights: boolean;
    height: number | null;
    id: number;
    interface: string;
    modified: Date;
    name: string;
    optimization: boolean;
    optimization_field: string;
    status: string;
    type: string;
    width: number | null;
}

export interface Advertiser {
    account_manager_id: string | null;
    address1: string;
    address2: string | null;
    city: string | null;
    company: string | null;
    conversion_security_token: string | null;
    country: string | null;
    date_added: Date;
    fax: string | null;
    id: number;
    modified: Date;
    other: string | null;
    phone: string | null;
    ref_id: string | null;
    region: string | null;
    signup_ip: string | null;
    status: string;
    tmp_token: string | null;
    wants_alerts: boolean;
    website: string | null;
    zipcode: string;
}

export interface Affiliate {
    account_manager_id: string | null;
    address1: string | null;
    address2: string | null;
    affiliate_tier_id: string | null;
    city: string | null;
    company: string;
    country: string | null;
    date_added: Date;
    fax: string | null;
    fraud_activity_alert_threshold: number | null;
    fraud_activity_block_threshold: number | null;
    fraud_activity_score: number | null;
    fraud_profile_alert_threshold: number | null;
    fraud_profile_block_threshold: number | null;
    fraud_profile_score: number | null;
    fraud_risk_tier: number | null;
    id: number;
    modified: Date;
    payment_method: string;
    payment_terms: string;
    phone: string | null;
    ref_id: string | null;
    referral_id: number | null;
    region: string | null;
    signup_ip: string | null;
    status: string;
    w9_filed: boolean;
    zipcode: string;
}

export interface Stat {
    ad_campaign_creative_id: number;
    ad_campaign_id: number;
    advertiser_id: number;
    advertiser_manager_id	: number;
    affiliate_count: number;
    affiliate_id: number;
    affiliate_info1: string;
    affiliate_info2: string;
    affiliate_info3: string;
    affiliate_info4: string;
    affiliate_info5: string;
    affiliate_manager_id: number;
    browser_id: number;
    city_name: string;
    clicks: number;
    conversions: number;
    count: number;
    country_code: string;
    cpa: number;
    cpc: number;
    cpm: number;
    creative_url_id: number;
    ctr: number;
    date: Date;
    device_brand: string | null;
    device_model: string | null;
    device_os: string | null;
    device_os_version: string | null;
    epc: number;
    erpc: number;
    goal_id: number;
    gross_clicks: number;
    gross_ctr: number;
    hour: number;
    impressions: number;
    ltr: number;
    mobile_carrier: string | null;
    month: number;
    offer_count: number;
    offer_file_id: number;
    offer_id: number;
    offer_url_id: number;
    payout: number;
    payout_type: string;
    profit: number;
    region_code: string | null;
    revenue: number;
    revenue_type: string;
    rpa: number;
    rpc: number;
    rpm: number;
    sale_amount: number;
    source: string;
    unique_clicks: number;
    unique_ctr: number;
    week: number;
    year: number;
}

export interface IStatReport  {
    'AdCampaign.name': string | null;
    'Advertiser.company': string | null;
    'Advertiser.ref_id': string | null;
    'AdvertiserManager.full_name': string | null;
    'AdvertiserTag.name': string | null;
    'Affiliate.company': string;
    'Affiliate.ref_id': string | null;
    'AffiliateManager.full_name	': string | null;
    'AffiliateTag.name': string | null;
    'Browser.display_name': string | null;
    'Category.id': number | null;
    'Category.name': string | null;
    'Country.name': string | null;
    'Goal.name': string;
    'Offer.display_advertiser': string;
    'Offer.name': string;
    'Offer.ref_id': string | null;
    'OfferChannel.name': string | null;
    'OfferConversionType.name': string | null;
    'OfferFile.display': string;
    'OfferIncentive.name': string | null;
    'OfferMediaPlacement.name': string | null;
    'OfferOperatingSystem.name': string | null;
    'OfferUrl.name': string;
    'OfferUrl.preview_url': string;
    'OfferVertical.name': string | null;
    'Region.name': string;
    stat: Stat;
}
