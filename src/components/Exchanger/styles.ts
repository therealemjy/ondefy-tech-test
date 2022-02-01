import styled from "styled-components";
import { ArrowDown } from "@styled-icons/heroicons-outline";

import BASE_SIZE from "../../constants/baseSize";
import Palette from "../../constants/palette";

export const Container = styled.div`
  padding: ${BASE_SIZE * 6}px;
  border: 2px solid ${Palette.paleGreen};
  border-radius: ${BASE_SIZE * 3}px;
  -webkit-box-shadow: 0 0 14px 0 ${Palette.paleGreen};
  box-shadow: 0 0 14px 0 ${Palette.paleGreen};
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${BASE_SIZE * 4}px;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
`;

export const RightColumn = styled(Column)`
  justify-content: flex-end;
`;

export const SwapDirectionRow = styled(Row)`
  justify-content: center;
  padding: ${BASE_SIZE * 4}px 0;
`;

export const SwapDirectionIcon = styled(ArrowDown)`
  width: ${BASE_SIZE * 6}px;
  height: ${BASE_SIZE * 6}px;
`;

export const ReceivedAmountRow = styled(Row)`
  margin-bottom: ${BASE_SIZE * 8}px;
`;
