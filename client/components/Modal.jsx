import React, { Component, useState } from "react";
import { Link, Switch, useHistory, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

const Modal = (props) => {


  // class Modal extends Component {
  // constructor() {
  //   super();

  //   const date = new Date();

  //   this.state = {
  //     questionTitle: "",
  //     questionContent: "",
  //     unit: "",
  //     resolved: false,
  //     dateCreated: date.toLocaleString(),
  //   };

  //   this.handleQuestionTitleChange = this.handleQuestionTitleChange.bind(this);
  //   this.handleQuestionContentChange = this.handleQuestionContentChange.bind(this);
  //   this.handleUnitChange = this.handleUnitChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // how do we pass the login _id as props to match this user_id from the post table? 
  const [userID, setUserId] = useState(0); 
  const [question, setQuestion] =  useState("");
  const [detail, setDetail] = useState("");
  const [category_id, setCategory_id] = useState(0);
  const[resolved, setResolved] = useState(Boolean);
  const [dateCreated , setDateCreated] = useState(""); 
  
  
 const handleQuestionTitleChange = (e) => {
     setQuestion(e.target.value)
    }
    
 const handleQuestionDetailChange = (e) => {
      setDetail(e.target.value)
  }
 const handleCategoryChange = (e) => {
   console.log(e.target.value);
      setCategory_id(parseInt(e.target.value))
      

  }

  let history = useHistory();
  
  const postButton = e => {
    e.preventDefault();
    // let currentDate = Date.prototype.toDateString()
    const event = new Date();
    const dateString = event.toLocaleString()
    console.log(dateString);
    
    console.log(`category_id ${category_id}`);
    


    fetch(`/createpost`, {
      method: "POST",
      body: JSON.stringify({
        user_id: 3,  //props from login
        // user_id: userID,  //props from 
        question: question,
        detail: detail,
        // category_id: category_id,
        category_id: category_id, 
        // resolved: resolved,
        resolved: false,
        // date_created: dateCreated
        date_created:  dateString,
        }),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(`add data ${data}`);
        history.push('/main')
      })
      .catch(err => console.log(`add fetch error ${err}`));
  }


    return (
      <div>
        <div id="Modal">
          <form onSubmit={postButton}>
            <input
              id="question-title" 
              onChange={handleQuestionTitleChange}
              />
            <input
              id="question-content"
              onChange={handleQuestionDetailChange}
              />
            <select onChange={handleCategoryChange} defaultValue="1">
              <option value="1">Unit 1: JS Fundamentals</option>
              <option value="2">
                Unit 2: Data Structures and Algorithms
              </option>
              <option value="3">Unit 3: Algorithms</option>
              <option value="4">Unit 4 Snake</option>
              <option value="5">Unit 5: React</option>
              <option value="6">Unit 6: Redux</option>
              <option value="7">Unit 7: AJAX</option>
              <option value="8">Unit 8: Node</option>
              <option value="9">Unit 9: Express</option>
              <option value="10">Unit 10: Databases</option>
              <option value="11">Unit 11: Authentication</option>
              <option value="12">Unit 12: Testing</option>
              <option value="13">Unit 13: Build Tools and Webpack</option>
              <option value="Other">Other</option>
            </select>
            {/* <Link to="/main"> */}
              <button type="submit">Submit</button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
}

export default Modal;



  // const [userID, setUserId] = useState(0);
  // const [question, setQuestion] =  useState("");
  // const [detail, setDetail] = useState("");
  // const [category_id, setCategory_id] = useState(0);
  // const[resolved, setResolved] = useState(Boolean);
  // const [dateCreated , setDateCreated] = useState(""); 

  // const handleChange = e => {
  //   // console.log(e.target.value, 'changed');
  //   setUserId(e.target.value);
  //   // console.log(`userID ${userID}`);
  // };
  
  // const onClick = e => {
    
  //   console.log(stickyNote);

  //   fetch(`./createpost`,{
  //         method: 'POST', 
  //         body: JSON.stringify({
  //           user_id: userID,
  //           question: question,
  //           detail: detail,
  //           category_id: category_id,
  //           resolved: resolved,
  //           date_created: dateCreated,
  //         }),
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         }).then((res) => {
  //           return res.json()
  //         }).then((data)=> {
  //           console.log(data);
  //           return data;
  //         }).catch(err => console.log(`createNote error ${err}`));
  //       };