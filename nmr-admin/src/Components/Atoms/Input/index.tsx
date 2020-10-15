import React,{useState} from 'react';
import {Input} from 'antd';
import {createUseStyles} from "react-jss";
import 'antd/dist/antd.css';

export interface InputProps{
    type  ?: string
}

const useStyles=createUseStyles({
    inputContainer:{
        height:40,
        width:250,
        fontSize:18,
        padding:"0px 10px",
        border:"none",
        borderBottom:"1px solid #e7e7e7",
        background:"#f0f0f0",
        borderRadius:5,
        '&:focus':{
            background:"#e7e7e7",
            borderBottom:"1px solid #dddddd",
        }
    }
    
})

const Inputfield: React.FC<InputProps>=(props)=>{
    const classes=useStyles();
    const [value, setValue]= useState("")
    // console.log(value)
    return(
        <div>
           <Input className={classes.inputContainer} type={props.type} value={value} onChange={(e)=>{setValue(e.target.value)}} /> 
        </div>
    )
    
}

export default Inputfield;