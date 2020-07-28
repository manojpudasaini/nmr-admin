import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
 
  VideoCameraOutlined,
  VideoCameraFilled,
  
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./layout.css";
const AppLayout = () => {
  const { Header, Sider, Content } = Layout;
  const [toggle, setToggle] = useState(false);

  const toogleHandler = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={toggle}>
        <div className="logo">LOGO</div>
        <Menu
          className="menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<VideoCameraFilled />}>
            Add Movies
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Add Series
          </Menu.Item>
          <Menu.Item key="3" icon={<VideoCameraFilled />}>
            Review
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {}
          {React.createElement(toggle ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: toogleHandler,
          })}
        </Header>
        <Content
          className="content"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
