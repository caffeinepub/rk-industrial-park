import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type PlotSize = {
    __kind__: "custom";
    custom: bigint;
} | {
    __kind__: "sqm500";
    sqm500: null;
} | {
    __kind__: "sqm1000";
    sqm1000: null;
} | {
    __kind__: "sqm2000";
    sqm2000: null;
} | {
    __kind__: "sqm5000";
    sqm5000: null;
};
export interface Enquiry {
    contactPerson: string;
    investmentTimeline: InvestmentTimeline;
    email: string;
    powerRequirement: string;
    companyName: string;
    phone: string;
    industryType: IndustryType;
    plotSize: PlotSize;
}
export enum IndustryType {
    logistics = "logistics",
    warehousing = "warehousing",
    other = "other",
    fmcg = "fmcg",
    engineering = "engineering",
    coldStorage = "coldStorage",
    manufacturing = "manufacturing",
    pharma = "pharma",
    packaging = "packaging"
}
export enum InvestmentTimeline {
    months12Plus = "months12Plus",
    months3To6 = "months3To6",
    immediate = "immediate",
    months6To12 = "months6To12"
}
export interface backendInterface {
    getEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(companyName: string, contactPerson: string, phone: string, email: string, industryType: IndustryType, plotSize: PlotSize, powerRequirement: string, investmentTimeline: InvestmentTimeline): Promise<void>;
}
