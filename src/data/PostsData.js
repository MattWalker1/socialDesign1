import postPic6 from '../assets/postPic6.jpg'
import postPic2 from '../assets/postPic2.jpg'
import postPic5 from '../assets/postPic5.jpg'

export const PostsData = [
    {
        img: postPic6,
        name: 'Blac Chynaa',
        desc: "want sum black suga bish?",
        likes: 1099,
        liked: true
    },
    {
        img: postPic2,
        name: 'Janelle',
        desc: "Morning meditation",
        likes: 420,
        liked: false
        // liked: false = the react parameter for a post to be liked or not 
        //- this needs to be hooked up to the backend to pull down from the db?
    },
    {
        img: postPic5,
        name: 'Vladimir P',
        desc: "Gangster pose",
        likes: 61223,
        liked: false
    },

];
