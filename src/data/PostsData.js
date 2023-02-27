import postPic6 from '../assets/postPic6.jpg'
import postPic2 from '../assets/postPic2.jpg'
import postPic5 from '../assets/postPic5.jpg'

//post data that would normally connect to the cdn and become dynamic
export const PostsData = [
    {
        img: postPic6,
        name: 'Gav',
        desc: "Berkshire Hathaway",
        likes: 1099,
        liked: true
    },
    {
        img: postPic2,
        name: 'Janelle',
        desc: "Morning meditation",
        likes: 430,
        liked: false
        // liked: false = the react parameter for a post to be liked or not 
        //- this needs to be hooked up to the backend to pull down from the db?
    },
    {
        img: postPic5,
        name: 'Tim',
        desc: "selfie",
        likes: 61223,
        liked: false
    },

];
