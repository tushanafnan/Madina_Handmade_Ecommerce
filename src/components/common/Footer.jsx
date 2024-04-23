import * as Route from "@/constants/routes";
import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../Weixin Image_20240422115311.jpg";

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className='footer'>
      <div className='footer-col-1'>
        <strong>
          <span>Developed by SIMO</span> <br />
          <span>For Dalian Polytechnic University Final Project</span>
        </strong>
      </div>
      <div className='footer-col-2'>
        <img alt='Footer logo' className='footer-logo' src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()} Medina's Handmade. All Rights Reserved.
        </h5>
      </div>
      <div className='footer-col-3'>
        <strong>
          <span>Medina's Handmade</span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
