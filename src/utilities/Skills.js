import { Form, Row, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'

const Skills = ({ user }) => {
  const [skills, setSkills] = useState([{key: 0, data:''}])
  

  useEffect(() => {
    setSkills([])
    user.skills?.map((item) => setSkills(currentArray => [...currentArray, item]))
  }, [user]);

  
  const onSubmit = (e) => {
    e.preventDefault()
    updateUser({skills})
    {
      setSkills([])
    }
  }

  const updateUser = async() => {
    const userToUpdate = user
    const updUser = { ...userToUpdate, skills: skills }
    fetch("http://localhost:5000/users/"+user.id, {
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
        <Row className="mb-3">
            {skills?.map((item, index)=><Form.Group className="mb-3">
              <Form.Control as="textarea" rows={2} value={item.data} key={item.id}
              onChange={(e) => {
                item.data = e.target.value;
                setSkills([...skills]);
              }}
              /></Form.Group>)}
        </Row>
        <Button variant="primary" type="submit">Save changes</Button>
      </Form>
  )
}

export default Skills