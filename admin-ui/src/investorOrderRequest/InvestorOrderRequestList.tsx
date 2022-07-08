import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvestorOrderRequestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InvestorOrderRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="OrderType" source="orderType" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="Side" source="side" />
        <TextField label="Ticker" source="ticker" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
