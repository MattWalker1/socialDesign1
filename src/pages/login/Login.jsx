import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const Profile = () => {
  return (
    <div className="LoginContainer"> 
      
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      
    </div>
  )
};

export default Profile