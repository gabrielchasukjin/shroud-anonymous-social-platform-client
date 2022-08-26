import React from 'react';
import axios from 'axios'; 
import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';


function Home() {


    //storing Posts as state
    const [listOfPosts, setListOfPosts] = useState([])
    // useNavigate allows user to Change to another route when in a route
    let navigate = useNavigate()
    // generate data on refresh from get api request
    useEffect(() =>{
            axios.get("http://localhost:3001/posts").then((response)=>{
            setListOfPosts(response.data)
        });
    },[]);


    return (
        <div className="posts">
            {/*Mapping each post in state as a div*/}
            {/*Reverse map to place most recent posts at top of page*/}
            {[...listOfPosts].reverse().map((value, key) => {
                return (
                <div className="post" onClick={()=>{
                    navigate(`/comment/${value.id}`)
                    }}
                > 
                    {/*Username of Post*/}
                    <h5 className="post-user">{value.username}</h5>
                    {/*Title of Post*/}
                    <p className="post-time">Posted {value.createdAt}</p>
                    {/*Title of Post*/}
                    <div className="post-title">{value.title}</div>
                    {/*Body of Post*/}
                    <div className="post-body">{value.postText}</div>
                </div>
            )})}
        </div>
  )
}

export default Home