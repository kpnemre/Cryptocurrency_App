import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import './Footer.css'

const { Text } = Typography;

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-desc">
          <Text>
            Copyright © 2021 <Link to="/">Cryptoverse Inc.</Link> All Rights
            Reserved.
          </Text>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
