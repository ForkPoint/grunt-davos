# grunt-davos

![npm](https://img.shields.io/npm/v/grunt-davos.svg) ![license](https://img.shields.io/npm/l/grunt-davos.svg) ![github-issues](https://img.shields.io/github/issues/forkpoint/grunt-davos.svg)  ![Circle CI build status](https://circleci.com/gh/forkpoint/grunt-davos.svg?style=svg)

> Grunt plugin for the Salesforce Cloud Commerce WebDav uploader.

![nodei.co](https://nodei.co/npm/grunt-davos.png?downloads=true&downloadRank=true&stars=true)

## Features

 - reads most of the data from package.json
 - list npm commands
 - author & licence
 - use a customizable ES6 template
 - badges


## Usage
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install --save-dev grunt-davos
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-davos');
```

## The "davos" task

### Overview
In your project's Gruntfile, add a section named `davos` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  davos: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  davos: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  davos: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Scripts  

 - **npm run test** : `grunt test`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[grunt](https://www.npmjs.com/package/grunt) | ~1.0.1 | ✔
[grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean) | ^1.0.0 | ✔
[grunt-contrib-jshint](https://www.npmjs.com/package/grunt-contrib-jshint) | ^1.1.0 | ✔
[grunt-contrib-nodeunit](https://www.npmjs.com/package/grunt-contrib-nodeunit) | ^1.0.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the develop branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. 

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

Thanks!

## Author

Kiril Kirov <kiril@forkpoint.com> forkpoint.com/davos

## License

 - **MIT** : http://opensource.org/licenses/MIT