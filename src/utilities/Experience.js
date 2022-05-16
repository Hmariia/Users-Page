import { Form, Col, Row, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'

const Experience = ({ user }) => {
  return (
    <Form>
      <Row className="mb-3">
        {user.experience?.date?.map((item)=>
          <Form.Group as={Col}>
            <Form.Control style={{ width: '220px'}} placeholder={item}></Form.Control>
          </Form.Group>)}
      </Row>
      <Row className="mb-3">
        {user.experience?.position?.map((item)=>
        <Form.Group as={Col}>
          <Form.Control placeholder={item}></Form.Control>
        </Form.Group>)}
      </Row>
      <Row className="mb-3">
        <Col>
        {user.experience?.about?.slice(0, 2).map((item)=>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} placeholder={item}></Form.Control>
          </Form.Group>)}
        </Col>
        <Col>
        {user.experience?.about?.slice(2, 4).map((item)=>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} placeholder={item}></Form.Control>
          </Form.Group>)}
        </Col>
        <Col>
        {user.experience?.about?.slice(4, 6).map((item)=>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} placeholder={item}></Form.Control>
          </Form.Group>)}
        </Col>
      </Row>   
      <Button variant="primary" type="submit">Save changes</Button>
   
    </Form>
  )
}

export default Experience