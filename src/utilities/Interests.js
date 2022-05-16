import 'bootstrap/dist/css/bootstrap.min.css'
import {  Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Interests = ({user}) => {

  const [interests, setInterests] = useState('')

  useEffect(() => {
    setInterests(user.interests);
  }, [user]);
  
  const onSubmit = (e) => {
    e.preventDefault()
    updateUser({interests})
    {
      setInterests('')
    }
  }

  const updateUser = async() => {
    const userToUpdate = user
    const updUser = { ...userToUpdate, interests: interests }
    const res = await fetch("http://localhost:5000/users/"+user.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updUser)
    })

    window.location.reload();
  }
  
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" >
        <Form.Control as="textarea" style={{ width: '650px', height: '200px' }} rows={3} 
         value={interests} onChange={(e) => setInterests(e.target.value)}/>
        </Form.Group>
      <Button variant="primary" type='submit'>Save changes</Button>
    </Form> 
  )
}

export default Interests