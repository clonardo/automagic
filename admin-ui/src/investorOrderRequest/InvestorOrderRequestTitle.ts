import { InvestorOrderRequest as TInvestorOrderRequest } from "../api/investorOrderRequest/InvestorOrderRequest";

export const INVESTORORDERREQUEST_TITLE_FIELD = "ticker";

export const InvestorOrderRequestTitle = (
  record: TInvestorOrderRequest
): string => {
  return record.ticker || record.id;
};
