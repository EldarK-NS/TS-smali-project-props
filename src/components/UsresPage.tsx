import axios from 'axios'
import React, { FC, useState, useEffect } from 'react'
import { IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'
import { useHistory } from 'react-router-dom';

const UsresPage: FC = () => {
   const history = useHistory()
   const [users, setUsers] = useState<IUser[]>([])

   useEffect(() => {
      fetchUsers()
   }, [])

   async function fetchUsers() {
      try {
         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=5')
         setUsers(response.data)
      } catch (error) {
         console.log(error)
         alert(error)
      }
   }


   return (
      <List
         items={users}
         renderItem={(user: IUser) => <UserItem user={user} key={user.id} onclick={() => history.push('/users/'+user.id)} />}
      />
   )
}

export default UsresPage
