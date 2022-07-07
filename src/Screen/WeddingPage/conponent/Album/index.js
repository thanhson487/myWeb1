import React, { useMemo } from "react";
import img1 from "./../../../../img/slideshow/img1.jpg";
import img2 from "./../../../../img/slideshow/img2.jpg";
import img3 from "./../../../../img/slideshow/img3.jpg";
import img4 from "./../../../../img/slideshow/img4.jpg";
import img5 from "./../../../../img/slideshow/img5.jpg";
import { Link } from "react-router-dom";
import "./style.scss";
import {
  CustomtypoContent,
  CustomtypoTitle,
  CustomWrapper,
  Wrapper,
  WrapperContent,
  OverLay,
  CustomContainer,
} from "./styled-album";

const IMAGES = [
  {
    id: 1,
    src: img1,
    thumbnail: img1,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 2,
    src: img2,
    thumbnail: img2,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    id: 3,
    src: img2,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img2,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img3,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img3,
    caption: "Aftr Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img3,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img3,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img5,
    thumbnail: img5,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img4,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img4,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img1,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img4,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

function Album(props) {
  const renderImage = useMemo(() => {
    return IMAGES.map((item) => {
      return (
        <CustomContainer className="gallery-item">
          <Link to="album-detail">
            <OverLay className="overlay" />
            <img src={item.src} alt="" className="img"></img>
            <CustomWrapper className="custom-wrapper">
              <CustomtypoTitle variant="h2">Black-Wlide</CustomtypoTitle>
              <CustomtypoContent variant="body1">People</CustomtypoContent>
            </CustomWrapper>
          </Link>
        </CustomContainer>
      );
    });
  }, []);
  return (
    <Wrapper>
      <WrapperContent>
        <div className="gallery">{renderImage}</div>
      </WrapperContent>
    </Wrapper>
  );
}

export default Album;
