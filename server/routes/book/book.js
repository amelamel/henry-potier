const express = require('express');
const router = express.Router();
// import books constant (it should be from database or api, here just a test)
const books = require("./books_list");

// Get book by isbn
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.get('/book/:isbn', (req, res) => {
      //  get isbn from request params
      var isbn = req.params.isbn
      //   return a book if isbn exist else return error
      res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
      if(isbn && books[isbn]){
        res.status(200).json({data:books[isbn]});
        res.send();
      }else{
        // return error if no book
        res.status(500).send('error')
      }   
    
});

module.exports = router;