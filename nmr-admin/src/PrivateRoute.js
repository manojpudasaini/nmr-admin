import React, { useContext } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './Components/Organism/Sidebar/sider';
import Header from './Components/Organism/Header/header';
import './Components/Organism/Layout/Layout.css';
import AuthContext from './Components/Organism/Auth/auth-context';


const PrivateRoute = (props) => {
    const { Content } = Layout;
    const auth = useContext(AuthContext)
    console.log(auth.login)
    return (
        <div>
          
       <Route {...props }>
        <Layout className="wrapper">
            <Sider />
            <Layout className="site-layout">
                <Header />
                <Content className="content-wrapper">
                    <props.component />
                </Content>
            </Layout>
        </Layout>
       </Route >) 

       </div>
        
    )
}
export default PrivateRoute;