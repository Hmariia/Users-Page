import { ListGroup } from "react-bootstrap"

const UserList = ({ user, onSelect}) => {
  return (
    <ListGroup>
        <ListGroup.Item className="list-item" onClick={() => onSelect(user.id)} action variant="primary">
          { user.name }
        </ListGroup.Item>
    </ListGroup>
  )
}

export default UserList