'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('davos_cleanup', 'Removing local archive.', function() {
      let options = this.options(),
        done = this.async(),
        davos = grunt.option('davos');

      davos.delete(options.archiveName).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
