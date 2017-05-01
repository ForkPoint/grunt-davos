'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('davos_watch', 'Watch.', function() {
      let options = this.options(),
        done = this.async(),
        davos = grunt.option('davos');

      davos.watch().then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
