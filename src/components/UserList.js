import { ListGroup } from "react-bootstrap"
import { useHistory } from 'react-router-dom'

const UserList = ({ user }) => {
  const history = useHistory()
  const selectedUser = () => {
    history.push("/selected-user/"+ user.id)
    window.location.reload()
  }
  return (
      <ListGroup.Item className="item-list" onClick={selectedUser} action variant="primary">
        { user.name }
      </ListGroup.Item>
  )
}

export default UserList