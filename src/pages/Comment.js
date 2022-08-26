import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'; 

function Comment() {
    // get id from url
    let {id} = useParams()
    // setting state to save post
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    // generate data on refresh from get api request
    useEffect(() =>{
            axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=>{
            setPostObject(response.data)
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
    },[]);

    const addComment = () => {
        axios
          .post("http://localhost:3001/comments", {
            commentBody: newComment,
            PostId: id,
          })
          .then((response) => {
            const commentToAdd = { commentBody: newComment, createdAt:"Just Now Posted" };
            setComments([...comments, commentToAdd]);
            setNewComment("");
          });
      };
    

  return (
    <div className="comment-container">
        <div className="post">
            {/*Username of Post*/}
            <h5 className="post-user">{postObject.username}</h5>
            {/*Title of Post*/}
            <p className="post-time">Posted {postObject.createdAt}</p>
            {/*Title of Post*/}
            <div className="post-title">{postObject.title}</div>
            {/*Body of Post*/}
            <div className="post-body">{postObject.postText}</div>
        </div>
        <div className="comment-input-container">
            <input className="comment-input"
                    types ="text" 
                    placeholder="Thoughts?"
                    value={newComment}
                    onChange={(event) => {
                    setNewComment(event.target.value);
                    }}
            />
            <buton className="comment-button"onClick={addComment}>Post Comment</buton>
        </div>
        <div className="list-comments">
        {comments.map((comment, key) => {
            return (
                <div key={key} className="comments">
                    <div  className ="post-time">
                        {comment.createdAt}
                    </div>
                    <div >
                        {comment.commentBody}
                    </div>
                </div>
            );
          })}
        </div>
    </div>
  )
}

export default Comment