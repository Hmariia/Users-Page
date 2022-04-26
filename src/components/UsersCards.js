import UserCard from "./UserCard"

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