'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('bm_ensure_no_import', 'Ensure no import currently being processed.', function() {
      let options = this.options(),
        done = this.async(),
        bm = grunt.option('bm');

      bm.ensureNoImport(options.archiveName).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
