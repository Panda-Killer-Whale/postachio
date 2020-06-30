import React from "react";

const Post = (props) => {
  return (
    <div>
      <div id="Post">
        <div id="post-username">{props.user_id}</div>
        <br />
        <label id="questionlabel">Question: </label>
        <div id="post-question">{props.question}</div>
        <br />
        <label id="answerlabel">Answer: </label>
        <div id="post-content">{props.detail}</div>
        <br />
        <label id="categorylabel">Category: </label>
        <div id="post-categories">{props.category_id}</div>
        <br />
        <label id="categorylabel">Resolved: </label>
        <div id="post-resolved">{props.resolved}</div>
        <br />
        <label id="postedlabel">Posted: </label>
        <div id="post-date">{props.date_created}</div>
      </div>
    </div>
  );
};
export default Post;
