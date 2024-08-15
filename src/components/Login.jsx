import { Button, Form, Input, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { getSignedInuser } from '../Utils/features/Users/loginSlice'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const  [form ]= Form.useForm()
  const UsersList =  useSelector(state=> state.userTable.usersTable)
  const signedIn = useSelector(state =>  state.login.signedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = (values)=>{
    if(signedIn.length){
      message.error("a user is logged in");
      return;
    }
    const signedInUser = UsersList.filter(user => user.email === values.email )

    dispatch(getSignedInuser(signedInUser))
    message.success("you are now logged in")
    form.resetFields()
    navigate("/dashboard")
    
  }
  return (
    <div className='flex-grow flex justify-center items-center'>
      <div>
          <h3 className='mb-3 font-bold text-[20px] text-center '>Login</h3>
          <div>
            <Form
              form={form}
              className='w-[90%] sm:w-[400px]'
              onFinish={handleLogin}
            >
              <div>
                <Form.Item
                  name={"email"}
                  
                >
                  <Input
                    type='email'
                    placeholder='email'
                    required
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  name={"pwd"}
                  
                >
                  <Input.Password
                    type='password'
                    placeholder='password'
                    required
                  />
                </Form.Item>
              </div>
                <Button className='bg-transparent text-white ml-40%' htmlType='submit'>Login</Button>
            </Form>
          </div>
      </div>
          
    </div>
  )
}

export default Login