import React from "react";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";

import "./header.css";
const MainHeader = (props:any) => {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <h1>Add Project</h1>
      <div>
        
      </div>
    </Header>
  );
};
export default MainHeader;
