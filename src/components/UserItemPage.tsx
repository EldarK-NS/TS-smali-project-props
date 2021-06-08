import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import { useParams, useHistory } from 'react-router-dom'

interface UserItemPageParams {
   id: string;
}

const UserItemPage: FC = () => {
   const [user, setUser] = useState<IUser | null>(null)

   const history = useHistory()
   const params = useParams<UserItemPageParams>()

   useEffect(() => {
      fetchUser()
   }, [])

   async function fetchUser() {
      try {
         const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
         setUser(response.data)
      } catch (error) {
         console.log(error)
         alert(error)
      }
   }
   return (
      <div>
         <button onClick={() => history.push('/users')}>Back</button>
         <h2>User Page {user?.name}</h2>
         <div>{user?.email}</div>
         <div>{user?.address.city}</div>
         <div>{user?.address.street}</div>
         <div>{user?.address.zipcode}</div>

      </div>
   )
}

export default UserItemPage
