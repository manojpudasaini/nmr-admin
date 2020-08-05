import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import 'antd/dist/antd.css';
import "./sider.css"
import { Link } from "react-router-dom";
const Sider = (props) => {
  const { Sider } = Layout;
  return (
    <Sider  trigger={null} collapsible collapsed={props.status} >
      <div className="logo">LOGO</div>
      <Menu  theme="dark" mode="inline" defaultSelectedKeys={["1"]}  >
        <Menu.Item key="1" icon={<UserOutlined />}>
          Series
          <Link to="/series"/>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        Movie
        <Link to="/movie"/>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default Sider;
