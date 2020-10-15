import React from 'react';
import {Button} from "antd";
import 'antd/dist/antd.css';

export interface ButtonProps{
    type ?: any,
    value ?: string,
    clickFunction :()=>void

}

const ButtonField: React.FC<ButtonProps>=(props)=>{
        return(
        <Button type={props.type} onClick={props.clickFunction}>{props.value}</Button>
        )
}


export default ButtonField;
