import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AddUser from './components/AddUser'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbox from './components/Navbox'
import UsersCards from './components/UsersCards'
import UsersList from './components/UsersList'
import UserDetails from './components/UserDetails'
import SelectedUser from './components/SelectedUser'
import { Container } from 'react-bootstrap'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect (() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()

    console.log(data)
    return data
  }

  
  //Fetch User
  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`)
    const data = await res.json()

    return data
  }

  const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
    setUsers(users.filter((user) => user.id !== id))
  }

  const addUser = async(user) => {
    const res = await fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(user)
    })

    const data = await res.json()
    setUsers([...users, data])
    window.location.reload();
  }

  const toggleReminder = async (id) => {
    const userToToggle = await fetchUser(id)
    const updUser = { ...userToToggle, reminder: !userToToggle.reminder }

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updUser),
  })

    const data = await res.json()

    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, reminder: data.reminder } : user
      )
    )
  }

  return (
    <Router>
      <Header />
      <Navbox/>
      <Switch>
        <Route path="/users/details/:userId" component={UserDetails}/>
        <Container fluid>
          <div className="slides-box">
            <div  className="left-slide">
              <UsersList users={users} />
            </div>
            <div className="right-slide">
              <Route path="/add-user"><AddUser onAdd={addUser} /></Route>
              <Route path="/selected-user/:userId">
                <SelectedUser onDelete={deleteUser} onToggle={toggleReminder}/>
              </Route>
              <Route path="/users">
                <UsersCards users={users} onDelete={deleteUser} onToggle={toggleReminder} />
              </Route>
            </div>
          </div>
        </Container> 
      </Switch>
      <Footer />
    </Router>
  )
}

export default App