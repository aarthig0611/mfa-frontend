import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './Signin.css';

function Signin() {
  const { instance } = useMsal();
  const [userProfile, setUserProfile] = useState(null);

  const Login = async () => {
    try {
      const response = await instance.loginPopup();
      const decodedToken = jwtDecode(response.idToken);
      console.log("Decoded Token:", decodedToken);
      setUserProfile(decodedToken);
    } catch (error) {
      console.error(error);
    }
  };

  const Logout = async () => {
    try {
      await instance.logoutPopup();
      setUserProfile(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <h1 className="title">React App with Azure AD B2C Authentication</h1>

      <AuthenticatedTemplate>
        <div className="alert alert-success">
          <p>You are authenticated!</p>
          <button className="btn btn-dark" onClick={Logout}>
            Logout
          </button>
        </div>

        <div className="profile">
          <h2>User Profile</h2>
          {userProfile ? (
            <ul className="profile-details">
              <li>
                <strong>Name:</strong> {[userProfile.given_name, userProfile.family_name].filter(Boolean).join(' ') || 'N/A'}
              </li>
              <li>
                <strong>Email:</strong> {userProfile.emails || 'N/A'}
              </li>
              <li>
                <strong>Username:</strong> {userProfile.name || 'N/A'}
              </li>
              <li>
                <strong>Issuer:</strong> {userProfile.iss || 'N/A'}
              </li>
            </ul>
          ) : (
            <p>Loading user profile...</p>
          )}
        </div>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div className="alert alert-warning">
          <p>You are not authenticated! Please Login to continue.</p>
          <button className="btn btn-dark" onClick={Login}>
            Login
          </button>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
}

export default Signin;
