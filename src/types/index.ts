export type BillingPeriod = 'monthly' | 'yearly';

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  isPopular?: boolean;
}

export interface UserSignupData {
  name: string;
  email: string;
  password: string;
  planId: string;
  billingPeriod: BillingPeriod;
} 