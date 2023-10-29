import { useState, useEffect } from "react";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileUpdateForm from "../../components/ProfileUpdateForm";

function Profile() {
  const [backendData, setbackendData] = useState([{}]);

  /*useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((response) => response.json())
      .then((data) => {
        setbackendData(data);
      });
  }, []);*/

  const [profiles, setProfiles] = useState(null)
  
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('http://localhost:3001/api/profiles/')
      const json = await response.json()

      if (response.ok) {
        setProfiles(json)
      }
    }

    fetchProfile()
  }, [])


  return (
    <div class = "container">
      <h2>Profile</h2>
      <div className="profiles">
        {profiles && profiles.map((profile) =>(
          <ProfileDetails key={profile._id} profile={profile} />
        ))}
      </div>
      <ProfileUpdateForm/>
    </div>
  )
  
}
export default Profile;

/*import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import DisplayProfile from './DisplayProfile';
import { useAuthContext } from '../../hooks/useAuthContext';


function Profile() {
  const [isNewUser, setIsNewUser] = useState(true);
  const { user } = useAuthContext();
  const [backendData, setbackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        });
        const json = await response.json();
        setbackendData(json); // Update the state with the fetched data
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user.token]);

  // Check if the user is a new user (you can replace this with actual logic)
  const checkNewUserStatus = () => {
 
  };

  useEffect(() => {
    checkNewUserStatus();
  }, []);

  return (
    <div>
      {isNewUser ? (
        // Display the registration form for new users
        <RegistrationForm setIsNewUser={setIsNewUser} />
      ) : (
        // Redirect to the user's profile page
        <DisplayProfile />
      )}
    </div>
  );
}

function RegistrationForm({ setIsNewUser }) {
  const handleSubmit = () => {
    // Handle form submission (e.g., send data to the server)
    // Set the user's status to indicate they are no longer new
    setIsNewUser(false);
  };

  return (
    // Form rendering and submission logic
    <ProfileForm />
  );
}



export default Profile;*/
