'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('webdav_unzip', 'Unzipping archive.', function() {
      let options = this.options(),
        done = this.async(),
        webdav = grunt.option('webdav');

      webdav.unzip(options.archiveName).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
