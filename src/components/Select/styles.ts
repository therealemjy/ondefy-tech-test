import styled from "styled-components";
import { ChevronDown } from "@styled-icons/heroicons-outline";

import Palette from "../../constants/palette";
import BASE_SIZE from "../../constants/baseSize";

export const Container = styled.div``;

export const SelectContainer = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: ${BASE_SIZE * 7}px;
  height: ${BASE_SIZE * 7}px;
  margin-right: ${BASE_SIZE}px;
`;

export const ItemLabel = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${Palette.white};
  margin-right: ${BASE_SIZE * 3}px;
`;

export const ItemCaret = styled(ChevronDown)`
  width: ${BASE_SIZE * 5}px;
  height: ${BASE_SIZE * 5}px;
  color: ${Palette.pigeonGrey};
`;
