import UserList from "./UserList"
import { ListGroup } from "react-bootstrap"

const UsersList = ({ users }) => {
  return (
    <ListGroup className="group-list">
       {users.map( (user, index) => 
        (<UserList key={index} user={user} />) )}
    </ListGroup> 
  )
}

export default UsersList