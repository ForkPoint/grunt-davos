module.exports = function(grunt) {
  let bm = grunt.option('bm');

  return {
    options: {

    },
    site: {
      options: {
        archiveName: 'sites_' + bm.config.codeVersion + '.zip'
      }
    }
  };
};
