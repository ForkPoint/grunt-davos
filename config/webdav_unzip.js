module.exports = function(grunt) {
  let webdav = grunt.option('webdav');

  return {
    options: {},
    cartridge: {
      options: {
        archiveName: 'cartriges_' + webdav.config.codeVersion + '.zip'
      }
    },
    site: {
      options: {
        archiveName: 'sites_' + webdav.config.codeVersion + '.zip'
      }
    }
  };
};
