import styled from "styled-components";

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
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
`;

export const RightColumn = styled(Column)`
  justify-content: flex-end;
`;
