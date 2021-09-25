import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          <Avatar icon={<UserOutlined />} />
        </Link>
        <Title level={2}>Cryptocurrency</Title>
      </div>
      <div className="menu">
        <Menu
          //   onClick={this.handleClick}
          style={{ width: 256 }}
        >
          <Menu.Item key="1">
            <Link to="/">Homepage</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/crypto/:coinId">CryptoDetail</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/ctyptocurrencies">Ctyptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
