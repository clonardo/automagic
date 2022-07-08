import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const InvestorOrderRequestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="orderType"
          label="OrderType"
          choices={[
            { label: "Market", value: "Market" },
            { label: "Limit", value: "Limit" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <SelectInput
          source="side"
          label="Side"
          choices={[
            { label: "Buy", value: "Buy" },
            { label: "Sell", value: "Sell" },
            { label: "Buy to Cover", value: "BuyToCover" },
            { label: "Sell Short", value: "SellShort" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Ticker" source="ticker" />
      </SimpleForm>
    </Edit>
  );
};
