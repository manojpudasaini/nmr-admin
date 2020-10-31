import React,{useState} from "react";
import Inputfield from '../Atoms/Input/index';
import {Button, Form, Input} from 'antd';
const Movies =()=>{
    const [formData,setFormData]=useState({
        pname:"Google Maps",
        language:"java"
    })
    const saveForm=()=>{
        console.log(formData)
    }
    return(
        <div >
            <h1 style={{color:'black'}}>This is Project Adding Section</h1>
         
           <Form layout='vertical' onFinish={saveForm} >
               <Form.Item label="Project Name">
               <Input value={formData.pname} type="text" onChange={(e)=>{setFormData({
                   ...formData,
                   pname:e.target.value
               })}}/>
               </Form.Item>
               <Form.Item label="Project Name">
               <Input type="text"/>
               </Form.Item>
               <Form.Item label="Project Name">
               <Input type="text"/>
               </Form.Item>
               <Form.Item label="Project Name">
               <Input type="text"/>
               </Form.Item>
               <Form.Item >
                   <Button htmlType="submit">Save</Button>
               </Form.Item>
           </Form>
        </div>
    )
}
export default Movies;