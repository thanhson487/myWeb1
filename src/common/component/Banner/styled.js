import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-blend-mode: multiply;
  background-color: rgba($color: #000000, $alpha: 0.2);
  background-image: url(https://matchthemes.com/demowp/gleam/wp-content/uploads/top-bkg-img1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  @media (max-width: 760px) {
    height: 50vh;
  }
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 0px 90px 0px;
  @media (max-width: 760px) {
    width: 80%;
  }
`;
export const Content = styled.div`
  font-size: 81px;
  color: #fff;
  font-weight: 700;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  line-height: 1.3em;
 font-family: 'Lobster', cursive;
font-family: 'Old Standard TT', serif;
  @media (max-width: 760px) {
    font-size: 48px;
  }
`;
export const ContentDr = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.05em;
  margin-top: 8px;
  display: block;
  line-height: 1.1;
  text-transform: uppercase;
`;
