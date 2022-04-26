import './index.css'
import { useState, useEffect } from 'react'
import AddUser from './components/AddUser'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbox from './components/Navbox'
import { Container } from 'react-bootstrap'
import UsersCards from './components/UsersCards'
import UsersList from './components/UsersList'
import { BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  const [showUsers, setShowUsers] = useState(false)
  const [users, setUsers] = useState([])
  const [showAddUser, setShowAddUser] = useState(false)

  useEffect(() => {
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

    console.log(data)
    return data
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
  }

  const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
    setUsers(users.filter((user) => user.id !== id))
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

  const selectUser = async (id) => {
    alert(`hello hello you selected ${id} user`)
    setUsers(
      users.filter((user) => user.id === id)
    )
    setShowUsers(!showUsers)
  }

  return (
    <Router>
      <Container fluid>
        <Header />
        <Navbox
          onAdd={() => setShowAddUser(!showAddUser)} 
          onShow={() => setShowUsers(!showUsers)} />
        <div className="slides-box">
            <div className="left-slide">
              { showAddUser && <AddUser onAdd={addUser} />}
              <UsersList users={users} onSelect={selectUser}/>
            </div>
            <div className="right-slide">
              { showUsers && <UsersCards users={users} onDelete={deleteUser} 
              onToggle={toggleReminder} />}
            </div>
        </div>
        <Footer />
      </Container>
    </Router>
  )
}

export default App