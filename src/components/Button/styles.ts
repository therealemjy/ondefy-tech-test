import styled from "styled-components";

import * as fontStyles from "../../constants/fontStyles";
import Palette from "../../constants/palette";
import BASE_SIZE from "../../constants/baseSize";

export const Container = styled.button`
  ${fontStyles.caption}

  display: block;
  width: 100%;
  color: ${Palette.white};
  background-color: ${Palette.paleGreen};
  border: 0;
  border-radius: ${BASE_SIZE}px;
  padding: ${BASE_SIZE * 3}px ${BASE_SIZE * 4}px;
  cursor: pointer;

  &:hover {
    background-color: ${Palette.turquoise};
  }

  &:disabled {
    background-color: ${Palette.asphaltGrey};
  }
`;
