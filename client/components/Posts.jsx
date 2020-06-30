import React, { Component } from "react";
import Post from "./Post.jsx";

const Posts = (props) => {
  return (
    <div>
      <h1 id="posts-head">Posts</h1>
      <div id="post-container">
        {props.posts.map((post) => {
          return (
            <Post
              user_id={post.user_id}
              question={post.question}
              detail={post.detail}
              category_id={post.category_id}
              resolved={post.resolved}
              date_created={post.date_created}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
