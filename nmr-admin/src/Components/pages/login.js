import React,{useContext} from 'react';
import AuthContext from '../Organism/Auth/auth-context';

const Login = () => {
    const auth = useContext(AuthContext)
    return (
        <div>
            <p>Welcome to login page</p>
            <button onClick={auth.login}>Login</button>
        </div>
    )
}
export default Login;