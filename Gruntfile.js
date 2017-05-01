/*
 * grunt-davos
 * https://github.com/Acer/grunt-davos
 *
 * Copyright (c) 2017 Kiril Kirov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // Imports
  const path = require('path'),
    Davos = require('davos'),
    ConfigManager = new Davos.ConfigManager();

  let davosOptions = {

  };

  grunt.option('davos', new Davos.Core(davosOptions, ConfigManager));
  grunt.option('bm', new Davos.BM(davosOptions, ConfigManager));
  grunt.option('webdav', new Davos.WebDav(davosOptions, ConfigManager));

  // load all grunt tasks
  grunt.loadTasks('tasks');

  // load all grunt configs, look in the config directory to modify configuration for any specific task
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config'),
    init: true
  });

};
