'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('bm_login', 'Log-in to Business Manager', function() {
      let options = this.options(),
        done = this.async(),
        bm = grunt.option('bm');

      bm.login().then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
