import styled from "styled-components";

import * as fontStyles from "../../constants/fontStyles";
import Palette from "../../constants/palette";
import BASE_SIZE from "../../constants/baseSize";

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  ${fontStyles.caption};

  display: block;
  margin-bottom: ${BASE_SIZE}px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 2px solid ${Palette.paleGreen};
  background-color: transparent;
  border-radius: ${BASE_SIZE * 2}px;
  padding: ${BASE_SIZE * 3}px ${BASE_SIZE * 2}px;
  color: ${Palette.white};

  &:focus-visible {
    outline: 0;
    border-color: ${Palette.turquoise};
  }
`;

export const Note = styled.span`
  ${fontStyles.legend};
`;
