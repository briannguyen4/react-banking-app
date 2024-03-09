import React from 'react';

export interface BankingContextType {
  checkingTransactions: Array<{type: string; amount: number }>;
  addCheckingTransaction: (transaction: { type: string; amount: number }) => void;
  checkingBalance: number;
  setCheckingBalance: React.Dispatch<React.SetStateAction<number>>;
  savingsTransactions: Array<{type: string; amount: number }>;
  addSavingsTransaction: (transaction: { type: string; amount: number }) => void;
  savingsBalance: number;
  setSavingsBalance: React.Dispatch<React.SetStateAction<number>>;
}