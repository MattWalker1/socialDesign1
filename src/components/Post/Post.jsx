import React from 'react'
import './Post.css'
import Comment from '../../assets/comment.svg';
import NotLike from '../../assets/thumb-like.svg';
import Liked from '../../assets/thumb-liked.svg';
import TipUser from '../../assets/tip-user.svg';


const Post = ({data}) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />

        <div className="postReact">
          <img src={data.liked?Liked: NotLike} alt="" />
          <img src={Comment} alt="" />
          <img src={TipUser} alt="" />  
        </div>

      <span>{data.likes} likes</span>

      <div className="detail">
          <span><b><u>{data.name} </u></b>- </span>
          <span> {data.desc}</span>
      </div>
  </div>
  )
}

export default Post

