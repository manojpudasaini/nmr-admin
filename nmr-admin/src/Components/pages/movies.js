import React,{useState} from "react";
import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import {firebaseStorage} from '../../firebase';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
const Movies =()=>{
  const [data,setData]=useState([]);
      
      const router=useHistory();
      useEffect(()=>{
        axios.get("https://virtserver.swaggerhub.com/WesionaryTEAM5/LocatorAPI/1.0.0/review/1")
        .then((res )=>{
          let placeArray=[];
             res.data.forEach((element) => {
                 placeArray.push(element)
             });
             setData(placeArray)
         })
      },[])
      console.log(data)
    return(
        <div style={{backgroundColor:"red",height:'90px'}} onClick={()=>router.push({
          pathname:"/series",
          state: {datas:data}
        })}>
       
      </div>
    )
}
export default Movies;