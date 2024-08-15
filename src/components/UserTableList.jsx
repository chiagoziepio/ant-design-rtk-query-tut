import React, { useState } from 'react'
import { Table, Modal, Input } from 'antd'
import { useSelector } from "react-redux"
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { DeleteUser } from '../Utils/features/Users/userSlice'
import { useDispatch } from 'react-redux'

const UserTableList = () => {
    const [isEditing, setIsEditing] = useState(false)
    const UsersList =  useSelector(state=> state.userTable.usersTable)
    const dispatch = useDispatch();
   const deleteUser = (record)=>{
   const  userId = record.id
    Modal.confirm({
        title : `Do you want to delete ${record.username}?`,
        okText: "yes",
        
        onOk: ()=>{
            dispatch(DeleteUser(userId))
            
        }
    })
   }
   const editUser = (record)=>{
        setIsEditing(true)
   }
    const userTableSource = UsersList.map(user=>{
        return {
            name: user.name,
            id: user.id,
            username: user.username,
            dob: user.dob

        }
    })
   
    
    
    const userTableCol = [
        {
            title: "Name",
            key: "id",
            dataIndex: "name"
        },
        {
            title: "Date of birth",
            key: "id",
            dataIndex: "dob"
        },
        {
            title: "Username",
            key: "id",
            dataIndex: "username"
        },
        {
            title: "Action",
            key: "4",
            render: (record)=>{
                return (
                    <div className='flex flex-row gap-2'>
                        <EditOutlined 
                            className='text-green-950 cursor-pointer'
                            onClick={()=>editUser(record)}    
                        />
                        <DeleteOutlined 
                            className='text-red-950 cursor-pointer'
                            onClick={()=>deleteUser(record)}
                        />
                    </div>
                )
               
                
            }
        }
    ]
  return (
    <div className='flex-grow flex justify-center items-center'>
        <Table
            columns={userTableCol}
            dataSource={userTableSource}
        />
        <Modal
            open ={isEditing}
            title = "Edit User"
            okText = "Done"
            onOk={()=>setIsEditing(false)}
            onCancel={()=>setIsEditing(false)}
        >
            <Input placeholder='fullname'/>
        </Modal>
    </div>
  )
}

export default UserTableList