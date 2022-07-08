export type InvestorOrderRequestUpdateInput = {
  orderType?: "Market" | "Limit" | null;
  quantity?: number;
  side?: "Buy" | "Sell" | "BuyToCover" | "SellShort";
  ticker?: string;
};
