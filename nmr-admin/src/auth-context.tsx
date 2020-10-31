import React,{useState} from 'react';

type User ={
    logged:boolean,
    price :number,

}

export  const UserContext=React.createContext<Partial<User>>(
    {}
  );
const Login=()=>{
    const [logged,setUserLoggedIn]=useState(true)
   
    return(
        
        <UserContext.Provider value={{logged}}>
        <button onClick={()=>setUserLoggedIn(true)}>
Login
        </button>
        </UserContext.Provider>
    )
}
export default Login;