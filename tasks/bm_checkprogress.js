'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('bm_checkprogress', 'Check site import progress', function() {
      let options = this.options(),
        done = this.async(),
        bm = grunt.option('bm');

      bm.checkImportProgress(options.archiveName).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
