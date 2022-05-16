import { Form, Col, Row, InputGroup, FormControl, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'

const Contact = ({user}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [street, setStreet] = useState('')
  const [suite, setSuite] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [zipcode, setZipcode] = useState('')

  useEffect(() => {
    setName(user.name)
    setEmail(user.email)
    setPhone(user.phone)
    setWebsite(user.website)
    setStreet(user.address?.street)
    setSuite(user.address?.suite)
    setCity(user.address?.city)
    setCountry(user.address?.country)
    setZipcode(user.address?.zipcode)
  }, [user]);

  const updateUser = async() => {
    const userToUpdate = user
    const updUser = {...userToUpdate, name: name,
      email: email, phone: phone, website: website, address:{ 
      street: street, suite: suite, city: city,
      country: country, zipcode: zipcode }}
    const res = await fetch("http://localhost:5000/users/"+user.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updUser)
    })
    window.location.reload();
  }

  const onSubmit = (e) => {
    e.preventDefault()
    updateUser({name, email, phone, website, street, suite, city, country, zipcode})
    {
      setName('')
      setEmail('')
      setPhone('')
      setWebsite('')
      setStreet('')
      setSuite('')
      setCity('')
      setCountry('')
      setZipcode('')
    }
  }
  
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" id="name" value={name} placeholder={user.name} 
          onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Username</Form.Label> 
          <Form.Control type="name" placeholder={user.username} disabled />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" id="email" value={email} placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}  />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" id="phone" value={phone} placeholder={user.phone}
          onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label htmlFor="basic-url">Website</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>https://example.com/users/</InputGroup.Text>
            <FormControl id="website" value={website} placeholder={user.website}
            onChange={(e) => setWebsite(e.target.value)}  />
          </InputGroup>
        </Form.Group>
      </Row>
      

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Street</Form.Label>
          <Form.Control id="street" value={street} placeholder={user.address?.street} 
          onChange={(e) => setStreet(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Suite</Form.Label>
          <Form.Control id="suite" value={suite} placeholder={user.address?.suite}
          onChange={(e) => setSuite(e.target.value)} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control id="city" value={city} placeholder={user.address?.city}
          onChange={(e) => setCity(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Country</Form.Label>
          <Form.Select id="country" defaultValue="Choose..."> value={country}
          onChange={(e) => setCountry(e.target.value)} 
            <option>Choose...</option>
            <option>{user.address?.country}</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}  >
          <Form.Label>Zipcode</Form.Label>
          <Form.Control id="zipcode" value={zipcode} placeholder={user.address?.zipcode}
          onChange={(e) => setZipcode(e.target.value)} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit" onClick={onSubmit}>Save changes</Button>
    </Form>
  )
}

export default Contact