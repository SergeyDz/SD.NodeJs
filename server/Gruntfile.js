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
      dist: {
        files: [
           { 
            expand: true, 
            cwd: '<%= yeoman.api.src %>',
            src:  '**',
            dest: '<%= yeoman.api.dist %>' }
        ],
      },

      pub: {
        files: [
           { expand: true, 
            src: [
              './node_modules/express/**',
              './node_modules/pg/**',
              './node_modules/pg-hstore/**',
              './node_modules/sequelize/**',
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
    },
    
    clean: ["tmp", "dist"]
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('build-api', ['clean','jshint', 'copy:dist', 'copy:pub']);
  grunt.registerTask('build', ['build-api']);
  grunt.registerTask('default', []);

};