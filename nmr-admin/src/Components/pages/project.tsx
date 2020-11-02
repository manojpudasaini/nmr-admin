import React,{useState} from "react";
import Inputfield from '../Atoms/Input/index';
import {Button, Form, Input, Tag, Select} from 'antd';
import {db} from "../../firebase"


const Project =()=>{
    const [formData,setFormData]=useState({
        pName:'',
        language:[] as any,
        pLink:'',
        iLink:''
    })
    const saveForm=async()=>{
        const res = await db.collection('project').add(formData);
        console.log(res)
    }
    return(
        <div >
            <h1 style={{color:'black'}}>This is Project Adding Section</h1>
         
           <Form layout='vertical' onFinish={saveForm} >
               <Form.Item label="Project Name">
               <Input value={formData.pName} type="text" onChange={(e)=>{setFormData({
                   ...formData,
                   pName:e.target.value
               })}}/>
               </Form.Item>
               <Form.Item label="Image Link">
               <Input value={formData.iLink} type="text" onChange={(e)=>{setFormData({
                   ...formData,
                   iLink:e.target.value
               })}}/>
               </Form.Item>
               <Form.Item label="Project Link">
               <Input value={formData.pLink} type="text" onChange={(e)=>{setFormData({
                   ...formData,
                   pLink:e.target.value
               })}}/>
               </Form.Item>

               <Form.Item>
               <Select
          mode="tags"
          size='large'
          placeholder="Please select"
          onChange={(value)=>{setFormData({
              ...formData,
              language:value
          })}}
          style={{ width: '100%' }} >
    
        </Select>
               </Form.Item>

               <Form.Item >
                   <Button htmlType="submit">Save</Button>
               </Form.Item>
           </Form>
        </div>
    )
}
export default Project;