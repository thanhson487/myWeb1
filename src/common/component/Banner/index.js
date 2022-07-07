import React from "react";
import { Wrapper, WrapperContent, Content, ContentDr } from "./styled";
function Banner({ title, content }) {
  return (
    <Wrapper>
      <WrapperContent>
        <Content>{title}</Content>
        <ContentDr>{content}</ContentDr>
      </WrapperContent>
    </Wrapper>
  );
}

export default Banner;
