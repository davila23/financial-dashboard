// src/mock/financialMockData.ts
import { AccountType, FinancialData } from '../model/FinancialData';

export const financialMockData: FinancialData = {
  "account-test": {
    assets: {
      "6KE1yXPlWNCyGbjabVLEFK1r58W3xLC8a6VrE": {
        balance: { available: null, current: 231.95, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid 401k",
        officialName: "unknown",
        subtype: "401k",
        type: AccountType.Investment,

      },
      "RbD4jBP3gXIGLKboKW3jCPKLlJNMzpCax9mzr": {
        balance: { available: 200, current: 210, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Saving",
        officialName: "Plaid Silver Standard 0.1% Interest Saving",
        subtype: "savings",
        type: AccountType.Depository
      },
      "6KE1yXP22NCyGbjabVLEFK1r58W3xLC8a6VrE": {
        balance: { available: null, current: 236, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid 401k",
        officialName: "unknown",
        subtype: "401k",
        type: AccountType.Investment,

      },
      "RbASDAjBP3gXIGLKboKW3jCPKLlJNMzpCax9mzr": {
        balance: { available: 12503, current: 210, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Saving",
        officialName: "Plaid Silver Standard 0.1% Interest Saving",
        subtype: "savings",
        type: AccountType.Depository
      },
      "6KEASDAXPlWNCyGbjabVLEFK1r58W3xLC8a6VrE": {
        balance: { available: null, current: 501, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid 401k",
        officialName: "unknown",
        subtype: "401k",
        type: AccountType.Investment,

      },
      "Rasd4jBP3gXIGLKboKW3jCPKLlJNMzpCax9mzr": {
        balance: { available: 450, current:287, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Saving",
        officialName: "Plaid Silver Standard 0.1% Interest Saving",
        subtype: "savings",
        type: AccountType.Depository
      },
      "6KE1yXP2WNCyGbjabVLEFK1r58W3xLC8a6VrE": {
        balance: { available: null, current: 231.95, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid 401k",
        officialName: "unknown",
        subtype: "401k",
        type: AccountType.Investment,

      },
      "RbD4jBP3g2GLKboKW3jCPKLlJNMzpCax9mzr": {
        balance: { available: 200, current: 210, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Saving",
        officialName: "Plaid Silver Standard 0.1% Interest Saving",
        subtype: "savings",
        type: AccountType.Depository
      },
      "6KE1yXP22NCyG2jabVLEFK1r58W3xLC8a6VrE": {
        balance: { available: null, current: 236, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid 401k",
        officialName: "unknown",
        subtype: "401k",
        type: AccountType.Investment,

      },
      "RbASDAjBP3gXIGL2boKW3jCPKLlJNMzpCax9mzr": {
        balance: { available: 12503, current: 210, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Saving",
        officialName: "Plaid Silver Standard 0.1% Interest Saving",
        subtype: "savings",
        type: AccountType.Depository
      },
      "6KEASDAXPlWNCyGbjabVLEFK1r28W3xLC8a6VrE": {
        balance: { available: null, current: 501, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid 401k",
        officialName: "unknown",
        subtype: "401k",
        type: AccountType.Investment,

      },
      "Rasd4jBP3gXIGLKboKW3jCPKLlJNMzpCax92r": {
        balance: { available: 450, current:287, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Saving",
        officialName: "Plaid Silver Standard 0.1% Interest Saving",
        subtype: "savings",
        type: AccountType.Depository
      }
    },
    clientVersion: "2020-09-14",
    liabilities: {
      "XkWDKoMPnEuKkAXGAeNDF1R7WB854esbMQw5w": {
        balance: { available: null, current: 652, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Student Loan",
        officialName: "unknown",
        subtype: "student",
        type: AccountType.Loan
      },
      "XkWDKoMPnEuKkAXGAeNDF1R7WB854easdasdaw": {
        balance: { available: null, current: 230, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Student Loan",
        officialName: "unknown",
        subtype: "student",
        type: AccountType.Loan
      },
      "XkWDKoMPasdauKkAXGAeNDF1R7WB854easdasdaw": {
        balance: { available: null, current: 230, isoCurrencyCode: "USD", limit: null, unofficialCurrencyCode: null },
        context: [],
        name: "Plaid Credit Card Loan",
        officialName: "unknown",
        subtype: "student",
        type: AccountType.Loan
      }
    },
    others: {},
    version: "v2.0.0"
  }
};
