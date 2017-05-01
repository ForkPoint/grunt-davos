'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('webdav_upload', 'Uploading archive.', function() {
      let options = this.options(),
        done = this.async(),
        webdav = grunt.option('webdav');

      webdav.put(options.archiveName).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
