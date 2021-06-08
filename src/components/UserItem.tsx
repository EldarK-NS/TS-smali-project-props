import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
   user: IUser;
   onclick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({ user, onclick }) => {
   return (
      <div style={{ padding: 15, border: '1px solid black' }} onClick={() => onclick(user)}>
         {user.id}, {user.name} lives in {user.address.city} city, {user.address.street} st.
      </div>
   )
}

export default UserItem
