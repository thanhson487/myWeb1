import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CustomUl, CustomShowMenu } from "./style.js";
import { useLocation } from "react-router-dom";
import "./styled.css";
import logo from "./logo.png";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
window.addEventListener("load", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuChild = document.querySelectorAll(".has-child > a");
  menuChild?.forEach((el) =>
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const subMenu = e.target?.nextElementSibling?.classList.toggle("show");
    })
  );
  menuToggle?.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
  });
});

function Navigation() {
  const [menuMobile, setMenuMobile] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [showIcon, setShowIcon] = useState(true);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const { width } = windowDimensions;
    console.log(width);

    if (width <= 551) {
      setShowIcon(false);
    }
    if (width < 1144) {
      setShowIcon(false);
    }
    if (width >= 1144) {
      setShowIcon(true);
    }
  }, [windowDimensions]);
  const location = useLocation();
  useEffect(() => {
    setMenuMobile(false);
  }, [location.pathname]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => {
    setMenuMobile(false);
  };
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <>
      <CustomShowMenu onClick={() => setMenuMobile(false)}></CustomShowMenu>
      <div className="wrapper">
        <nav className="nav">
          <Link to="/" className="logo" style={{ cursor: "pointer" }}>
            <img src={logo} className="img-logo" alt="logo" />
          </Link>
          <i
            className="fal fa-bars menu-toggle"
            onClick={() => setMenuMobile(!menuMobile)}
          />
          <ul className={menuMobile === true ? "menu show" : "menu "} ref={ref}>
            <li className="menu-item ">
              <Link to="/" className="menu-link">
                Trang chủ
              </Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="menu-link">
                Dịch vụ
                <i
                  className="fal fa-angle-down menu-arrow"
                  style={{ marginLeft: "2px" }}
                />
              </a>
              <ul className="menu-child ">
                <li className="menu-child-item">
                  <Link to="/phong-su-cuoi" className="menu-child-link">
                    Phóng sự cưới
                  </Link>
                </li>
                <li className="menu-child-item">
                  <Link to="/su-kien" className="menu-child-link">
                    Sự kiện
                  </Link>
                </li>
                <li className="menu-child-item">
                  <a href="/concept" className="menu-child-link">
                    Concept
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="menu-link">
               Album
                <i
                  className="fal fa-angle-down menu-arrow"
                  style={{ marginLeft: "2px" }}
                />
              </a>
              <ul className="menu-child ">
                <li className="menu-child-item ">
                  <a href="#" className="menu-child-link">
                    Phóng sự cưới
                  </a>
                </li>
                <li className="menu-child-item">
                  <a href="#" className="menu-child-link">
                    Sự kiện
                  </a>
                </li>
                <li className="menu-child-item">
                  <a href="#" className="menu-child-link">
                    Concept
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Báo giá
              </a>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-link">
                Giới thiệu
              </Link>
            </li>
          </ul>
          {showIcon && (
            <CustomUl>
              <li>
                <a
                  href="http://www.facebook.com/thanhsonitptit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/son.camcam/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <i className="fab fa-youtube" />
              </li>
            </CustomUl>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navigation;
