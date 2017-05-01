module.exports = function(grunt) {
  let davos = grunt.option('davos');

  return {
    options: {

    },
    cartridge: {
      options: {
        currentRoot: process.cwd(),
        archiveName: 'cartriges_' + davos.config.codeVersion + '.zip',
        arrayWithGlob: davos.config.cartridge,
        rootPrefix: ''
      }
    },
    site: {
      options: {
        currentRoot: process.cwd(),
        archiveName: 'sites_' + davos.config.codeVersion + '.zip',
        arrayWithGlob: davos.siteMetaFolder,
        rootPrefix: 'sites_' + davos.config.codeVersion + '/'
      }
    }
  };
};
