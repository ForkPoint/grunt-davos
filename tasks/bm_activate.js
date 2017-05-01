'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('bm_activate', 'Activate code version', function() {
      let options = this.options(),
        done = this.async(),
        bm = grunt.option('bm');

      bm.activateCodeVersion().then(function () {
        done();
      }, function (err) {
        done(false);
      });
    });
};
