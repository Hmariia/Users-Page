import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserCard from "./UserCard";

const SelectedUser = ({ onDelete, onToggle }) => {
    const { userId } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
          const userFromServer = await fetchUser()
          setUser(userFromServer)
        }
        getUser()
    }, [])
    
    const fetchUser = async () => {
      const res = await fetch("http://localhost:5000/users/"+userId)
      const data = await res.json()
    
      console.log(data)
      return data
    }

  return (
      <>
        <UserCard user={user} 
        onDelete={onDelete} 
        onToggle={onToggle}
        />
      </>
  )
}

export default SelectedUser