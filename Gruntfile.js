/* jshint node: true */
var matchdep = require('matchdep');

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          base: '.',
          open: 'http://localhost:3000/elements/examples/index.html'
        }
      }
    },
    inlinelint: {
      html: [
        'elements/**/*.html'
      ]
    }
  });

  matchdep.filterAll('grunt-*').forEach(function(pkgName){
    grunt.loadNpmTasks(pkgName);
  });

  grunt.registerTask('default', ['connect:server:keepalive']);
};
