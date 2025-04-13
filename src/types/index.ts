export interface Plan {
  popular: boolean;
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  isFeatured?: boolean;
}

export type BillingPeriod = 'monthly' | 'yearly';

export interface UserSignupData {
  name: string;
  email: string;
  password: string;
  planId: string;
  billingPeriod: BillingPeriod;
} 