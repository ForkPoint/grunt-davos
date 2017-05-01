module.exports = function(grunt) {
  return {
    options: {
      jshintrc: '.jshintrc'
    },
    all: [
       'Gruntfile.js',
       'tasks/*.js',
       '<%= nodeunit.tests %>'
     ]
  };
};
