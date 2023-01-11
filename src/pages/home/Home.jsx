import React from 'react'
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import RightSide from '../../components/RightSide/RightSide ';
// import headerImage from './fansverse-logo.jpg';
import "./Home.css";

const Home = () => {
  return (
    // Declare ProfileSide page as an HTML element in order to load it from it's react page
    <div className="Home">
        <ProfileSide/> 
        <PostSide/>
        <RightSide/>
    </div>
    
  )
}

export default Home;