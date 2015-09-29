module.exports = function (grunt) {
  
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    spa: {
      src: 'src/client/**/*.js',
      dist: 'dist/spa',
      pub: '/var/www/SD.NodeJs/public_html/'
    },
    api: {
      src: 'src/server/**/*.js',
      dist: 'dist/api',
      pub: '/var/www/SD.NodeJs/public_node/'
    }

  };

  grunt.initConfig({
    
    // Project settings
    yeoman: appConfig,

    pkg: grunt.file.readJSON('package.json'),
    concat: {
      spa: {
          src: '<%= yeoman.spa.src %>',
          dest: '<%=yeoman.spa.dist%>/<%= pkg.name %>.js'
      },
      api: {
          src:
            [
              '<%= yeoman.api.src %>'
            ],
          dest: '<%=yeoman.api.dist%>/index.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      spa: {
          files: {
            '<%=yeoman.spa.dist%>/<%= pkg.name %>.min.js': ['<%= concat.spa.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    copy: {
      spa: {
        files: [
          // includes files within path
          { expand: true, flatten: true, src: ['<%= yeoman.spa.dist %>/**/*.js'], dest: '<%= yeoman.spa.pub %>' },
      
          // includes files within path and its sub-directories
          { expand: true, flatten: true, src: ['src/client/index.html'], dest: '<%= yeoman.spa.pub %>' }
        ],
      },

      api: {
        files: [
           { expand: true, 
            src: [
              './node_modules/express/**',
              './node_modules/mongodb/**'
              ], 
              dest: '<%= yeoman.api.pub %>' },
          // includes files within path
          { expand: true, flatten: true, src: ['<%= yeoman.api.dist %>/**/*.js'], dest: '<%= yeoman.api.pub %>' },
        ],
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
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

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('build-spa', ['jshint', 'concat:spa', 'uglify:spa', 'copy:spa']);
  grunt.registerTask('build-api', ['jshint', 'concat:api', 'copy:api']);
  grunt.registerTask('build', ['build-spa', 'build-api']);
  grunt.registerTask('default', []);

};