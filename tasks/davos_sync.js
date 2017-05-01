'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('davos_sync', 'Sync.', function() {
      let options = this.options(),
        done = this.async(),
        davos = grunt.option('davos');

      davos.sync().then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
