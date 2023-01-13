import React from 'react'
import { UilSync } from '@iconscout/react-unicons'
import { UilAngleLeftB } from '@iconscout/react-unicons'
import { UilAngleRightB } from '@iconscout/react-unicons'
import './RightSide.css'
import janelle2 from '../../assets/janelle2.jpg'
import img3 from '../../assets/img3.jpg'
import postPic5 from '../../assets/postPic5.jpg'



const RightSide  = () => {
  return (
  <div className="RightSide">

   <div className="suggestedUsers">
        <img className="suggestion-1"src={janelle2} alt="" />
        <img className="suggestion-1b"src={img3} alt="" />
        <img className="suggestion-1c"src={postPic5} alt="" />

    
    <input type="text" name="searchUser" placeholder=" Search user or posts"/>
      <button className="refresh-button"> 
        <UilSync/>
      </button>

      <button className="previous-button"> 
        <UilAngleLeftB/>
      </button>

      <button className="next-button"> 
        <UilAngleRightB/>
      </button>

    </div>
      
        
  </div>
  )
}

export default RightSide 