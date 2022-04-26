import {Card, Button} from 'react-bootstrap'
import pic3 from '../Images/human1.jpg'
import { FaTimes } from 'react-icons/fa'

const UserCard = ({ user, onDelete, onToggle}) => {
  return (
    <Card className={`card ${user.reminder && 'reminder'}`}
    onDoubleClick={() => onToggle(user.id)} >
      <Card.Img className='card-image' variant="top" src={pic3} />
      <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <FaTimes className='card-icon' style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(user.id)} />
      <Card.Link style={{color: 'blue'}}>{user.email}</Card.Link> <br />
      <Button className='card-button'>More info</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard