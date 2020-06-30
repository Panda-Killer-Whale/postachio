// import React, { Component } from "react";
// import Post from "./Post.jsx";

// class Posts extends Component {
//   constructor(props) {
//     super(props);
//   };

//   render() {
//     let x = [];
//     for (let i = 0; i < props.posts.length; i++) {
//       x.push(
//         <Post
//         key={`post${i}`}
//         postid={post.id}
//         username={post.username}
//         question={post.question}
//         detail={post.detail}
//         category={post.category}
//         resolved={post.resolved}
//         date={post.date_created}
//       />
//       );
//     return (
//       <div>
//         <h1 id="posts-head">Posts</h1>
//         <div id="post-container">
//           {this.loadPosts()}
//         </div>
//       </div>
//     );
//   };
// };

// export default Posts;


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
              key={Math.random()}
              id={post.id}
              lit={props.lit}
              username={post.username}
              question={post.question}
              detail={post.detail}
              category={post.category}
              resolved={post.resolved}
              date={post.date_created}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
