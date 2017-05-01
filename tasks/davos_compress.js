'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('davos_compress', 'Creating archive of all cartridges.', function() {
      let options = this.options(),
        done = this.async(),
        davos = grunt.option('davos');

      davos.compress(options.currentRoot, options.archiveName, options.arrayWithGlob, options.rootPrefix).then(function () {
        done();
      }, function () {
        done(false);
      });
    });
};
