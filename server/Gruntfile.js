module.exports = function (grunt) {
  
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    api: {
      src: 'src',
      dist: 'dist',
      pub: '/var/www/SD.NodeJs/public_node/'
    }

  };

  grunt.initConfig({
    
    // Project settings
    yeoman: appConfig,

    pkg: grunt.file.readJSON('package.json'),
 
    copy: {      
      apidist: {
        files: [
           { 
            expand: true, 
            cwd: '<%= yeoman.api.src %>',
            src:  '**',
            dest: '<%= yeoman.api.dist %>' }
        ],
      },

      apipub: {
        files: [
           { expand: true, 
            src: [
              './node_modules/express/**',
              './node_modules/body-parser/**',
              './node_modules/mongoose/**',
              './node_modules/mongoose-timestamp/**',
              './node_modules/mongodb/**'
              ], 
              dest: '<%= yeoman.api.pub %>' },
          // includes files within path
          { expand: true, cwd: '<%= yeoman.api.dist %>', src: '**', dest: '<%= yeoman.api.pub %>' },
        ],
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        esnext: true,
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('build-api', ['jshint', 'copy:apidist']);
  grunt.registerTask('build', ['build-api']);
  grunt.registerTask('default', []);

};