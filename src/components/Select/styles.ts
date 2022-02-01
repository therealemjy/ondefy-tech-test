import styled from "styled-components";
import { ChevronDown } from "@styled-icons/heroicons-outline";

import * as fontStyles from "../../constants/fontStyles";
import Palette from "../../constants/palette";
import BASE_SIZE from "../../constants/baseSize";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Label = styled.label<{
  for: string; // Styled Components' typing is incorrect and does not include the "for" prop
}>`
  ${fontStyles.caption};

  display: block;
  margin-bottom: ${BASE_SIZE / 2}px;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  padding: ${BASE_SIZE}px ${BASE_SIZE}px ${BASE_SIZE}px 0;
`;

export const ItemImage = styled.img`
  width: ${BASE_SIZE * 7}px;
  height: ${BASE_SIZE * 7}px;
  margin-right: ${BASE_SIZE * 2}px;
`;

export const ItemLabel = styled.span`
  ${fontStyles.smallTitle};

  margin-right: ${BASE_SIZE * 3}px;
`;

export const ItemCaret = styled(ChevronDown)`
  width: ${BASE_SIZE * 5}px;
  height: ${BASE_SIZE * 5}px;
  color: ${Palette.pigeonGrey};
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -${BASE_SIZE * 2}px; // Compensate for items' left padding
  top: 100%;
  border-radius: ${BASE_SIZE * 2}px;
  background-color: ${Palette.obsidianGrey};
  overflow: hidden;
`;

export const DropdownItem = styled(Item)`
  padding: ${BASE_SIZE * 2}px;

  &:hover {
    background-color: ${Palette.turquoise};
  }
`;
