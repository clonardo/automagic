import { StringFilter } from "../../util/StringFilter";

export type InvestorOrderRequestWhereInput = {
  id?: StringFilter;
  side?: "Buy" | "Sell" | "BuyToCover" | "SellShort";
  ticker?: StringFilter;
};
