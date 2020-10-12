import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './Components/Organism/Sidebar/sider';
import Header from './Components/Organism/Header/header';
import './Components/Organism/Layout/Layout.css';
const PrivateRoute=(props:any)=>{
    const {Content}=Layout;
    return(
       <Route {...props}>
           <Layout className="wrapper">
               <Sider/>
               <Layout className="site-layout">
               <Header/>
                   <Content className="content-wrapper">
                   <props.component/>
                   </Content>
               </Layout>
           </Layout>
       </Route>
    )
}
export default PrivateRoute;