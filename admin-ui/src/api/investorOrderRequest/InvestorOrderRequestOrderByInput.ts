import { SortOrder } from "../../util/SortOrder";

export type InvestorOrderRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderType?: SortOrder;
  quantity?: SortOrder;
  side?: SortOrder;
  ticker?: SortOrder;
  updatedAt?: SortOrder;
};
