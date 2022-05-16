import { Form , Button} from 'react-bootstrap'
import { useState } from 'react'

const AddUser = ({onAdd}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!username)
        {
            alert('Please add user details')
            return
        }
        onAdd({username, email, name, reminder})
        {
            setEmail('')
            setUsername('')
            setName('')
            setReminder(false)
        }
    }
  return (
    <Form className='add-form' onSubmit={onSubmit} >
        <Form.Group className='form'>
            <Form.Label>Name</Form.Label>
            <Form.Control className='label-box' type="name" placeholder="Enter name" 
            value={name} onChange={(e) => setName(e.target.value)} />
            <Form.Text className="text-muted">Please enter full name</Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='form'>
            <Form.Label>User name</Form.Label>
            <Form.Control className='label-box' type="user-name" placeholder="User-name" 
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group> 
        <br />
        <Form.Group className='form'>
            <Form.Label>Email</Form.Label>
            <Form.Control className='label-box' type="email" placeholder="Enter email" 
            value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
            <Form.Text className="text-muted">Please enter email address</Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='form'>
            <Form.Check checked={reminder} type="checkbox" label="Send me a reminder" 
            value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </Form.Group>
        <Button className='form-button' variant="primary" type="submit" >Submit</Button>
    </Form>
  )
}

export default AddUser