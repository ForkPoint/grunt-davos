'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('bm_import_site', 'Import site.', function() {
      let options = this.options(),
        done = this.async(),
        bm = grunt.option('bm');

      bm.importSites(options.archiveName).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
