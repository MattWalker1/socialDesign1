import React from 'react'
import { UilBell } from '@iconscout/react-unicons'
import { UilEnvelopeHeart } from '@iconscout/react-unicons'
import { UilUserCheck } from '@iconscout/react-unicons'
import { UilCreditCard } from '@iconscout/react-unicons'
import { UilUserSquare } from '@iconscout/react-unicons'
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        
        <button>
            <UilBell/>
            Notifications
        </button>

        <button>
            <UilEnvelopeHeart/>
            Messages
        </button>

        <button>
            <UilUserCheck/>
            Subscriptions
        </button>

        <button>
            <UilCreditCard/>
            Add Card
        </button>

        <button>
            <UilUserSquare/>
            My Profile
        </button>

        
    </div>
  )
}

export default ProfileCard

// <div className="ProfileImages"> 
//             <img src={Profile} alt=""/>
            
//         </div>
// <div className="ProfileName">
//            <span>Warren Buffitt</span>
//            <span>Berkshire Boys</span>
//         </div>

// <img src={Cover} alt="" />
// <div className="followStatus">
//             <hr />
//             <div>
//                 <div className="follow">
//                     <span>69</span>
//                     <span>Following</span>
//                 </div>
//                 <div className="vl"></div>
//                 <div className="follow">
//                     <span>7789</span>
//                     <span>Followers</span>
//                 </div>
//             </div>
//             <hr />
//         </div>