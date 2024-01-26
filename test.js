const axios = require('axios')
const URL = "http://127.0.0.1:5000/login";
const headers = {"Content-Type": "application/json"};
axios
  .post(URL, { email: "li@gmail.com", password: "123456" }, {headers:headers}).then((response)=> {
    console.log(response);
  }).catch((error)=> {
    console.log(error);
  })