const gulp = require('gulp');
const axios = require("axios");

const options = require('./config/options.json');


function request(cb) {
  axios.request(options)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      cb();
    });
}

function result(cb) {
  console.log('jupii');
  
  cb();
}


function init(cb) {
  if (symbol) {
    cb();
  } else {
    cb(new Error('parameter missing'));
  }
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}



//exports.kirjain = gulp.series(init, lastNames, result);

exports.request = gulp.series(request);
exports.result = gulp.series(result);

exports.default = defaultTask
//exports.default = gulp.series(init, result);
