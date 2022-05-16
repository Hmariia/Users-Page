import { Form, Col, Row, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const Education = ({ user }) => {
  const [degree, setDegree] = useState([])
  const [degreeDate, setDate] = useState([]);
  const [place, setPlace] = useState([]);


  return (
    <Form>
      <Row className="mb-3">
        <Form.Group>
          <Form.Control type="name" placeholder={user.education?.degree[0]} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder={user.education?.place[0]} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder={user.education?.date[0]} />
        </Form.Group>
      </Row>
      <div className="line"></div>
      <Row className="mb-3">
        <Form.Group>
          <Form.Control type="name" placeholder={user.education?.degree[1]} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder={user.education?.place[1]} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder={user.education?.date[1]} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">Save changes</Button>

    </Form>
  )
}

export default Education