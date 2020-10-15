import React,{useState} from 'react';
import {Input} from 'antd';
import {createUseStyles} from "react-jss";
import 'antd/dist/antd.css';

export interface TextAreaProps{
    placeholder?:string
}
const useStyles=createUseStyles({
    textAreaContainer:{
        width:400,
        fontSize:18,
        
    }
})

const { TextArea } = Input;
const TextAreaField: React.FC<TextAreaProps>=(props)=>{
   const [value,setValue]= useState("");

   const classes=useStyles();
    return (
        <TextArea
          className={classes.textAreaContainer}
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
          placeholder={props.placeholder}
          autoSize={{ minRows: 3, maxRows: 5 }}
          allowClear={true}
        />
    );
}

export default TextAreaField;
