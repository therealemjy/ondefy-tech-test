import * as React from "react";

import * as Styles from "./styles";

export interface ExchangerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Exchanger: React.FC<ExchangerProps> = ({ ...containerProps }) => (
  <Styles.Container {...containerProps}>Content goes here</Styles.Container>
);

export default Exchanger;
