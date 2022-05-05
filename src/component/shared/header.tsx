import React from "react";
import { Box } from "@material-ui/core";
import LogoFajesa from "./../../assets/fajesa-b.png";
import "./../../sass/shared/_header.scss";
import headerBg from "./../../assets/blob-header.svg";
import {  animateScroll as scroll } from "react-scroll";

class Header extends React.Component {
  scrollToSection = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <React.Fragment>
        <img src={headerBg} className="headerBg" alt="" />
        <Box
          className="navMenu"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={LogoFajesa} alt="logo" />
          
        </Box>
      </React.Fragment>
    );
  }
}

export default Header