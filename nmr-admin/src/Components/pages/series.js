import React from "react";
import {useLocation} from 'react-router-dom';
const Series =()=>{
    const data=useLocation();
    console.log(data.state);
    return(
        <div style={{color:'red'}}>
            This is Series sections
        </div>
    )
}
export default Series;