import UserList from "./UserList"

const UsersList = ({ users, onSelect }) => {
  return (
    <>
        {users.map( (user, index) => 
        (<UserList key={index} user={user} onSelect={onSelect} />) )}
    </>
  )
}

export default UsersList