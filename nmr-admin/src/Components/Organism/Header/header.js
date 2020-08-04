import React, { useState } from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  
  } from '@ant-design/icons';
  import './header.css';
const MainHeader=(props)=>{
    const { Header} = Layout;
   
    return(
        <Header className="site-layout-background" style={{ padding: 0 }}>
       <h1>Movie Review</h1>
      </Header>

    )
}
export default MainHeader;