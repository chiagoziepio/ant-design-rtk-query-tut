import React, { useState } from 'react'
import {Form, Button, Input, message, Select, DatePicker, Switch} from "antd"
import { DatabaseOutlined, MailOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/features/Users/userSlice'
const Login = () => {
  const [isChecked , setIsChecked] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [form] = Form.useForm()
  
  const Onfininsh = (values)=>{
    if(!isChecked) return
    dispatch(addUser(values))

    message.success(`${values.username} registered successfully`)
    
    form.resetFields();
    navigate("/userdisplaylist")
    
  }
  return (
   <>
   <div className=' flex-col flex-grow flex justify-center items-center relative'>
      <div className='w-[350px] z-0 rounded-[50%] bg-red-950 blur-[40px] h-[350px] absolute top-[20%] left-[40%] right-[50%] bottom-[50%]'/>

        <div className="form z-40 bg-[rgba(0,0,0,0.3)] p-2 w-[70%] sm:w-[700px]">
          <h3 className='text-center'>Register</h3>
          <Form
          form={form}
          onFinish={Onfininsh}
            layout='vertical'
            
          >
            <div className=' input-control sm:flex flex-col sm:flex-row justify-between gap-y-4'>
            <div className='right w-full sm:w-[50%] mr-5'>
                  <div className='!border-b-[#6b6666cb] border-b-2 text-gray-400 relative'>
                  <UserAddOutlined className='text-white absolute bottom-[25px]'/>
                    <Form.Item 
                      label="fullname"
                      name={"fullname"}
                      rules={[
                        {
                          required: true,
                          message: "provide your fullname"
                        },
                        {whitespace:true},
                        {min:3}
                      ]}
                      hasFeedback
                    >
                      
                      <Input placeholder='fullname' className='input  bg-transparent border-none !outline-none p-[7px] text-[19px]  hover:bg-transparent text-gray-400 m-0 absolute left-[30px] w-[90%] right-0 bottom-[-9px]'/>
                    </Form.Item>
                  </div>
                  <div className='!border-b-[#6b6666cb] border-b-2 text-gray-400 relative'>
                  <UserOutlined className='text-white absolute bottom-[25px]'/>
                  <Form.Item 
                      label="username"
                      name={"username"}
                      rules={[
                        {
                          required: true,
                          message: "username not be given"
                        },
                        {whitespace:true},
                        {min:3}
                      ]}
                      
                      hasFeedback
                    >
                      
                      <Input placeholder='username' className='input  bg-transparent border-none !outline-none p-[7px] text-[19px]  !hover:bg-transparent text-gray-400 m-0 absolute left-[30px] w-[90%] right-0 bottom-[-9px] !active:bg-transparent'/>
                    </Form.Item>
                  </div>
                  <div className='!border-b-[#6b6666cb] border-b-2 text-gray-400 relative'>
                  <MailOutlined className='text-white absolute bottom-[25px]'/>
                  <Form.Item 
                      label="Email"
                      name={"email"}
                      rules={[
                        {
                          required: true,
                          message: "email not be given"
                        }
                      ]}
                      
                      hasFeedback
                    >
                      
                      <Input placeholder='Email' className='input  bg-transparent border-none !outline-none p-[7px] text-[19px]  !hover:bg-transparent text-gray-400 m-0 absolute left-[30px] w-[90%] right-0 bottom-[-9px] !active:bg-transparent'/>
                    </Form.Item>
                  </div>
            </div>
            <div className="left w-full sm:w-[50%]">
                <div className='!border-b-[#6b6666cb] border-b-2 text-gray-400 relative'>
                        
                        <Form.Item 
                          label="password"
                          name={"password"}
                          rules={[
                            {
                              required: true,
                              message: "password should be strong"
                            },
                            {whitespace:true},
                            {min:8}
                          ]}
                          hasFeedback
                        >
                          
                          <Input.Password placeholder='password' type='password' className='input  bg-transparent border-none !outline-none p-[7px] text-[19px]  hover:bg-transparent text-gray-400 m-0 absolute left-0 w-[90%] right-0 bottom-[-9px]'/>
                        </Form.Item>
                      </div>
                <div className='!border-b-[#6b6666cb] border-b-2 text-gray-400 relative'>
                       
                        <Form.Item 
                          label="confirm password"
                          name={"cPwd"}
                          rules={[
                            {
                              required: true,
                              message: "password do not match"
                            },
                            {whitespace:true},
                            {min:8}
                          ]}
                          hasFeedback
                        >
                          
                          <Input.Password placeholder='confirm password' type='password' className='input  bg-transparent border-none !outline-none p-[7px] text-[19px]  hover:bg-transparent text-gray-400 m-0 absolute left-0 w-[90%] right-0 bottom-[-9px]'/>
                        </Form.Item>
                      </div>
                <div className='!border-b-[#6b6666cb] border-b-2 text-gray-400 relative'>
                      <DatabaseOutlined className='text-white absolute bottom-[25px]'/>
                        <Form.Item 
                          label="Date of birth"
                          name={"dob"}
                          rules={[
                            {
                              required: true,
                              message: "date of bith need"
                            },
                            
                
                          ]}
                          hasFeedback
                        >
                          
                          <DatePicker placeholder='date of birth' className='input  bg-transparent border-none !outline-none p-[7px] text-[19px]  hover:bg-transparent text-gray-400 m-0 absolute left-[30px] w-[90%] right-0 bottom-[-9px]'/>
                        </Form.Item>
                      </div>

            </div>
            </div>
              <div className='flex flex-row gap-y-8 mt-5'>
              <Form.Item>
                <Switch
                  checked={isChecked}
                  onChange={()=> setIsChecked(!isChecked)}
                  checkedChildren="yes"
                  unCheckedChildren="No"
                />
              </Form.Item>
                <p className='text-white ml-[15px]'>I agree to the <a href="">Terms and conditions</a></p> 
                
              </div>
              
              <Form.Item>
                <Button className='bg-transparent text-white t-[19px] w-[10rem] h-[2.2rem] mt-4 mx-[30%]' htmlType='submit'>Register</Button>
              </Form.Item>
          </Form>
        </div>
      
   </div>
   </>
  )
}

export default Login