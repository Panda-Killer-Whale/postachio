const db = require("../models/sqlModel.js");

const postController = {};
// NOTE: the user_id needs to match the login _id from the login table. JOIN query? 
postController.createPost = (req, res, next) => {
  const addPostQuery = `INSERT INTO post (user_id, question, detail,        
     category_id, resolved, date_created) 
      VALUES ($1, $2, $3, $4, $5, $6)`;
  const values = [
    req.body.user_id,
    req.body.question,
    req.body.detail,
    req.body.category_id,
    req.body.resolved,
    req.body.date_created,
  ];



  /*
    INSERT INTO post( username_id, question, detail, categories_id ,resolved, date_created) 
    VALUES('user1','ASK A QUESTION','WHERE MESSAGE WILL SHOW','UNIT NUMBER',true,'2020-07-01')
     
    const values = [
            user123,
            "When should I use a JWT?",
            "There are a lot of arguments both for and against the use of JWTs.  Critics of JWTs often point to certain security vulnerabilities that session cookies do not have.  It is also a lot harder to revoke JWTs than it is do delete a cookie.",
            "Unit 11",
            true,
            "2020-06-01",
      ];
  */
  db.query(addPostQuery, values)
    //.then((data) => {
    // 
    //  res.locals = data.rows[0]; 
    //  console.log( 'DATA.ROWS[0] FROM addPostQuery' , data.rows[0]);
    //  console.log('VALUES' , values);
    //  return next();
    //})
    .catch((err) => console.log(err));

  //console.log(db.query(addPostQuery, values));

  return next();
};


postController.getAllPosts = (req, res, next) => {
  const getAllPostsQuery =
    `
  SELECT post.id, post.user_id, login.username, post.question, post.detail, categories.category, post.resolved, post.date_created
  FROM login
  LEFT JOIN post
  ON login.id = post.user_id
  LEFT JOIN categories
  ON post.category_id = categories.id
  `;

  db.query(getAllPostsQuery)
    .then((data) => {
      console.log(`*************GARRET BRIAN JEHO************* ${data.rows}`);
      res.locals.allPosts = data.rows;
      return next();
    })
    .catch((err) => console.log(err));
};

postController.deletePost = (req, res, next) => {
  const deletePostQuery = `DELETE FROM post WHERE _id=${req.body.id}`;
  db(deletePostQuery)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));

  return next();
};

postController.searchPosts = (req, res, next) => {
  const getSearchQuery = `SELECT * FROM post WHERE (post LIKE '${req.body.value}')`;

  db.query(getSearchQuery)
    .then((data) => {
      res.locals.results = data.rows;
      return next();
    })
    .catch((err) => console.log(err));
};

postController.getOnePost = (req, res, next) => {
  // console.log("INSIDE GET ONE POST GARRETT JEHO BRIAN", req);
  const getOneQuery =
    `
  SELECT login.username, post.question, post.detail, categories.category, post.resolved, post.date_created
  FROM login
  LEFT JOIN post
  ON login.id = post.user_id
  LEFT JOIN categories
  ON post.category_id = categories.id WHERE post.id=${req.body.postid}
  `;

  db.query(getOneQuery)
    .then((data) => {
      // console.log('getONEquery:', data.row)
      res.locals.onePosts = data.rows;
      return next();
    })
    .catch((err) => console.log(err));
};

postController.getResponse = (req, res, next) => {
  const getOneResponse =
    `
  SELECT login.username, response.response_body, response.date_created, response.top_answer
  FROM login
  LEFT JOIN response
  ON login.id = response.user_id
  WHERE post.id=${req.body.postid}
  `;

  db.query(getOneResponse)
    .then((data) => {
      console.log('getoneResponse:', data.rows)
      res.locals.oneResponse = data.rows;
      return next();
    })
    .catch((err) => console.log(err));
};

module.exports = postController;
