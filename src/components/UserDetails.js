import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router";

const UserDetails = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
                const json = await response.json();
                console.log(json);
                setUser(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return( 
        <div className="reverse-card">
            <span> - name: {user.name} <br/></span>
            <span> - username: {user.username} <br/></span>
            <span> - email: {user.email} <br/></span>
            <span> - phone: {user.phone} <br/></span>
            <span> - company : {user.company && user.company.name} <br/></span>
            <span> - website: {user.website} <br/></span>
            <span> address: </span> 
            <li> street: {user.address && user.address.street} </li>
            <li> suite: {user.address && user.address.suite} </li>
            <li> city: {user.address && user.address.city} </li>
            <li> zipcode: {user.address && user.address.zipcode} </li>
        </div>
    )
}

export default UserDetails