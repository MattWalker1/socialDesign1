import React, {useState, useRef} from 'react'
import BuffettProfile from '../../assets/BuffettProfile.jpg'
import './PostShare.css'
// UilScenery, PlayCircle, etc are all imported from the @iconscout/react-unicons library - 
// this can be imported using the above import tag then calling that import below in a HTML <UilScenery/> tag.
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilTimes} from "@iconscout/react-unicons"


// the Parent div <div className="PostShare"/> contains all of the icon and post input text field within it
// Individual post option divs must be inside the parent div, in order for the icons flex directions to show correctly
const PostShare = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange =(event)=>{
    if(event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
        <img src={BuffettProfile} alt="" />
        <div>
          <input type="text" placeholder="What's happening?"/>
          
          <div className="postOptions">
                <div className="option" 
                  style={{color: "var(--photo)"}}
                  onClick={()=>imageRef.current.click()}
                >
                    <UilScenery/>
                    
                </div>
                
                <div className="option"
                style={{color: "var(--video)"}}>
                    <UilPlayCircle/>
                  
                </div>

                <button className="button ps-button">
                  Share
                </button>
                <div style={{display: "none"}}>
                  <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                </div>
           </div>
          {image && 
            <div className="previewImage">
              <UilTimes onClick={()=>setImage(null)}/>
              <img src={image.image} alt=""/>
            </div>
          }


        </div>
    </div>  
    
  )
}

export default PostShare