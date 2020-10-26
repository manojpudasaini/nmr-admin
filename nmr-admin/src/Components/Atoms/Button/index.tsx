import React from 'react';
import {Button} from "antd";
import 'antd/dist/antd.css';

export interface ButtonProps{
    type ?: any,
    value ?: string,
    clickFunction ?:()=>void,
    className ?: any, 

}

const ButtonField: React.FC<ButtonProps>=(props)=>{
        return(
        <Button className={props.className} type={props.type} onClick={props.clickFunction}>{props.children}</Button>
        )
}


export  {ButtonField};
