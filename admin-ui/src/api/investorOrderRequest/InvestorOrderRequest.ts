export type InvestorOrderRequest = {
  createdAt: Date;
  id: string;
  orderType?: "Market" | "Limit" | null;
  quantity: number;
  side?: "Buy" | "Sell" | "BuyToCover" | "SellShort";
  ticker: string;
  updatedAt: Date;
};
