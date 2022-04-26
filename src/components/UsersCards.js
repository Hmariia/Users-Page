import UserCard from "./UserCard"
import UserList from "./UserList"

const UsersCards = ({users, onDelete, onToggle}) => {
  return (
    <>
        {users.map( (user, index) => 
        (<UserCard key={index} user={user} 
        onDelete={onDelete} 
        onToggle={onToggle}
        />) )}
    </>
  )
}

export default UsersCards