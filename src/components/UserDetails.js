import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { Image, Button, ButtonGroup, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import pic1 from '../Images/person.jpg'
import Contact from "../utilities/Contact";
import Skills from "../utilities/Skills";
import Education from "../utilities/Education";
import Interests from "../utilities/Interests";
import Summary from "../utilities/Summary";
import Experience from "../utilities/Experience";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const UserDetails = () => {
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

    const history = useHistory()
    const pushContactData = () => {
      history.push("/users/details/"+ user.id + "/contact")
      window.location.reload()
    }
    const pushSummaryData = () => {
      history.push("/users/details/"+ user.id + "/summary")
      window.location.reload()
    }
    const pushExperienceData = () => {
      history.push("/users/details/"+ user.id + "/experience")
      window.location.reload()
    }
    const pushEducationData = () => {
      history.push("/users/details/"+ user.id + "/education")
      window.location.reload()
    }
    const pushSkillsData = () => {
      history.push("/users/details/"+ user.id + "/skills")
      window.location.reload()
    }
    const pushInterestsData = () => {
      history.push("/users/details/"+ user.id + "/interests")
      window.location.reload()
    }

    return( 
      <Router>
        <Switch>
            <Container fluid>
              <div className="details-box">
              <div className="left-box">
                <Image className="picture" src={pic1}></Image>
                <h5>{user.name}</h5>
                <h6>{user.address?.city}, {user.address?.country}</h6>
              </div>
              <div className="middle-box">
                <Route path="/users/details/:userId/contact"><Contact user={user} /></Route>
                <Route path="/users/details/:userId/experience"><Experience user={user} /></Route>
                <Route path="/users/details/:userId/education"><Education user={user} /></Route>
                <Route path="/users/details/:userId/skills"><Skills user={user} /></Route>
                <Route path="/users/details/:userId/interests"><Interests user={user} /></Route>
                <Route path="/users/details/:userId/summary"><Summary user={user} /></Route>
              </div>
              <ButtonGroup vertical className="sidebar">
                <Button onClick={pushContactData}>Contact</Button>
                <Button onClick={pushEducationData}>Education</Button>
                <Button onClick={pushExperienceData}>Experience</Button>
                <Button onClick={pushInterestsData}>Interests</Button>
                <Button onClick={pushSummaryData}>Summary</Button>
                <Button onClick={pushSkillsData}>Skills</Button>
              </ButtonGroup>
            </div>
            </Container>
          </Switch>
      </Router>
        
    )
}

export default UserDetails
