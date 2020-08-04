import React, { useState } from "react";
import Sider from "../Sidebar/sider";
import { Layout } from "antd";
import "./Layout.css";
import Header from "../Header/header";
import Movies from '../../pages/movies';
const MainLayout = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const { Content } = Layout;

  return (
    <Layout className="wrapper">
      <Sider />
      <Layout className="site-layout">
        <Header />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
