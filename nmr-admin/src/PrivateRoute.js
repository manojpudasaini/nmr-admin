import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './Components/Organism/Sidebar/sider';


const PrivateRoute=(props)=>{
    return(
       <Route {...props}>
           <Layout>
               <Sider/>
               <Layout>
                   <props.component/>
               </Layout>
           </Layout>
       </Route>
    )
}
export default PrivateRoute;