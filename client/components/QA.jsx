import React, { Component } from 'react';
import axios from 'axios';

class QA extends Component {
  constructor(props) {
    super(props);

    this.loadQuestion = this.loadQuestion.bind(this);
    this.loadResponses = this.loadResponses.bind(this);
  };

  loadQuestion() {
    // Add code here.
    let postBody;
    axios.get('/retrievequestions', {
      params: {
        postid: this.props.postid
      }
    })
    .then(res => {
      postBody = res.data;
      console.log(postBody);
    })
    .catch(err => {
      console.log(err);
      return;
    });

    // return(
    //   <div id="question-box">
    //     <h2>{postBody.question}</h2>
    //     <h5>Asked by <strong>{postBody.user}</strong> on {postBody.dateCreated}</h5><br />
    //     <h5>Category: {postBody.category}</h5>
    //     <hr />
    //     <p>{postBody.detail}</p>
    //   </div>
    // );
  };

  loadResponses() {
    // Add code here.
    let responses;
    axios.get('/loadresponses', {
      params: {
        postid: this.props.postid
      }
    })
    .then(res => {
      responses = res.data;
      console.log(responses);
    })
    .catch(err => {
      console.log(err);
      return;
    });

    const responseDivs = [];

    // for (let i = 0; i < responses.length; i++) {
    //   responseDivs.push(
    //     <div className="response" key={`response${i}`}>
    //       <div>
    //         <h5>Answered by <strong>{responses[i].username}</strong> on {responses[i].dateCreated}</h5><br />
    //         <p>{responses[i].responseBody}</p>
    //       </div>
    //       <hr />
    //     </div>
    //   );
    // };
    // return responseDivs;
  };

  render() {
    return(
      <div id="qa-container">
        {this.loadQuestion()}
        <hr />
        <div id="responses-box">
          {this.loadResponses()}
        </div>
      </div>
    );
  };
};

export default QA;