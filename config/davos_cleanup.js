module.exports = function(grunt) {
  let davos = grunt.option('davos');

  return {
    options: {},
    cartridge: {
      options: {
        archiveName: 'cartriges_' + davos.config.codeVersion + '.zip'
      }
    },
    site: {
      options: {
        archiveName: 'sites_' + davos.config.codeVersion + '.zip'
      }
    }
  };
};
