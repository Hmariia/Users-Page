import 'bootstrap/dist/css/bootstrap.min.css'
import {  Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Summary = ({user}) => {
  const [summary, setSummaryText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    updateUser()
    {
      setSummaryText('')
    }
  }

  useEffect(() => {
    setSummaryText(user.summary);
  }, [user]);

  const updateUser = async() => {
    const userToUpdate = user
    const updUser = { ...userToUpdate, summary: summary }
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
    <Form>
      <Form.Group className="mb-3">
    
        <Form.Control as="textarea" style={{ width: '650px', height: '200px' }} 
        rows={3}
        value={summary} onChange={(e) => setSummaryText(e.target.value)} />
    
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmit}>Save changes</Button>

    </Form>
    
  )
}

export default Summary