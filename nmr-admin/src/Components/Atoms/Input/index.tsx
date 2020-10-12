import React,{useState} from 'react';
import {Input} from 'antd';
import {createUseStyles} from "react-jss";
export interface InputProps{
    type  ?: string
    value ?: string
}

const useStyles=createUseStyles({
    inputContainer:{
        height:40,
        width:250,
        fontSize:18,
        padding:"0px 10px",
    }
})

const Inputfield: React.FC<InputProps>=(props)=>{
    const classes=useStyles();
    return(
        <div>
           <Input className={classes.inputContainer} type={props.type} /> 
        </div>
    )
    
}

export default Inputfield;