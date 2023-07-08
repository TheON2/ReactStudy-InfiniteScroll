import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: inline-block;
  width: 100%;
  background: transparent;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
`;

export const StyledSelect = styled.select`
  width: 200px;
  height: 40px;
  padding: 10px;
  background: #fff;
  appearance: none; /* this is to remove the default arrow of select box in some browsers */
  font-size: 16px;
  color: #333;
`;

export const StyledOption = styled.option`
  color: #333;
  background: #fff;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;
