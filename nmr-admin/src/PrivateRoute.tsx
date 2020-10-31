import React,{useContext} from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './Components/Organism/Sidebar/sider';
import Header from './Components/Organism/Header/header';
import './Components/Organism/Layout/Layout.css';
import {UserContext} from './auth-context';
const PrivateRoute=(props:any)=>{
    const {Content}=Layout;
    const {logged}=useContext(UserContext)
  console.log(logged)
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