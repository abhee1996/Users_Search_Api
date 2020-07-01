import React from 'react'
import UserItems from './UserItems';
const User = ({users ,login,followers}) => {
    return (
        <div>
            {users.map(user =>(
                <UserItems user={user} key={user.id}/>
            )
            
            )}
        </div>
    )
}

export default User
