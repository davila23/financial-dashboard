// src/models/FinancialData.ts

export interface FinancialData {
    [key: string]: InstitutionData;
}

export interface InstitutionData {
    assets: { [key: string]: Account };
    clientVersion: string;
    liabilities: { [key: string]: LiabilityAccount };
    others: Record<string, unknown>;
    version: string;
}

export interface Account {
    balance: Balance;
    context: any[]; // Update with a more specific type if possible
    name: string;
    officialName: string | null;
    subtype: string;
    type: AccountType;
}

export interface LiabilityAccount extends Account {
    context: LiabilityContext[];
}

// Define LiabilityContext based on your specific needs
export interface LiabilityContext {
    accountId: string;
    accountNumber: string;
    category: string;
    // ... other fields as per your requirements
}

export interface Balance {
    available: number | null;
    current: number;
    isoCurrencyCode: string;
    limit: number | null;
    unofficialCurrencyCode: string | null;
}
export type AccountsRecord = Record<string, Account>;

export enum AccountType {
    Investment = "investment",
    Depository = "depository",
    Loan = "loan",
}
