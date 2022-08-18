import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Box } from "@material-ui/core";

import headerBg from "./../../assets/blob-header.svg";
import headerMobile from "../../assets/blo-header-mobile.svg";
import groway from "../../assets/groway-black.svg";
import "./../../sass/shared/_header.scss";

const Header = () => {
  const [width, setWidth] = useState(0);
  scroll.scrollToTop();

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <img
        src={width < 700 ? headerMobile : headerBg}
        className="headerBg"
        alt="headerBg"
      />
      <Box
        className="navMenu"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={groway} alt="Groway.Education" />
      </Box>
    </>
  );
};

export default Header;
