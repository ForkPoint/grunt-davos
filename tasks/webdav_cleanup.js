'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('webdav_cleanup', 'Removing archive.', function() {
      let options = this.options(),
        done = this.async(),
        webdav = grunt.option('webdav');

      webdav.delete(options.archiveName).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
