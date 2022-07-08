import { InvestorOrderRequestWhereInput } from "./InvestorOrderRequestWhereInput";
import { InvestorOrderRequestOrderByInput } from "./InvestorOrderRequestOrderByInput";

export type InvestorOrderRequestFindManyArgs = {
  where?: InvestorOrderRequestWhereInput;
  orderBy?: Array<InvestorOrderRequestOrderByInput>;
  skip?: number;
  take?: number;
};
