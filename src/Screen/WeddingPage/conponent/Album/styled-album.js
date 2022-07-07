import styled from "styled-components";
import { Typography } from "@material-ui/core";
export const CustomtypoTitle = styled(Typography)`
  color: #ffffff !important;
  font-size: 24px !important;
  font-weight: 700 !important;
  letter-spacing: 0.03em !important;
  font-family: Cormorant, sans-serif !important;
  margin-top: 20px !important;
`;
export const CustomtypoContent = styled(Typography)`
  color: #ffffff !important;
  box-shadow: none !important;
  text-decoration: none !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.03em !important;
  margin-top: 10px !important;
  margin-bottom: 20px !important;
`;
export const CustomWrapper = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperContent = styled.div`
  width: 80%;
`;
export const OverLay = styled.div`
  display: none;
  background-color: #000000;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
export const CustomContainer = styled.div``;
