module.exports = function (grunt) {
  
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    spa: {
      src: 'src/script',
      dist: 'dist/spa',
      pub: '/var/www/SD.NodeJs/public_html/'
    }
  };

  grunt.initConfig({
    
    // Project settings
    yeoman: appConfig,

    pkg: grunt.file.readJSON('package.json'),
    
    // START ES6 Compile here
    transpile: {
      amd: {
        type: 'amd',
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['**/*.js'],
          dest: 'tmp/',
          ext: '.amd.js'
        }]
      },

      commonjs: {
        type: 'cjs',
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['my_library/*.js'],
          dest: 'dist/commonjs/',
          ext: '.js'
        },
        {
          src: ['lib/my_library.js'],
          dest: 'dist/commonjs/main.js'
        }]
      }
    },
    
    concat: {
      options: {
        separator: ';'
      },
      spa: {
          src: 
            [
              './node_modules/react/dist/react.js',
              './node_modules/jquery/dist/jquery.js',
              '<%= yeoman.spa.src %>/**/*.js', 
              '!<%= yeoman.spa.src %>/app.js',
              '<%= yeoman.spa.src %>/app.js'
            ],
          dest: '<%=yeoman.spa.dist%>/<%= pkg.name %>.js'
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
    },
     react: {
      jsx: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.spa.src %>',
            src: [ '**/*.jsx' ],
            dest: '<%= yeoman.spa.src %>',
            ext: '.js'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-es6-module-transpiler");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('build-spa', ['react','jshint', 'concat:spa', 'uglify:spa', 'copy:spa']);
  grunt.registerTask('build', ['build-spa']);
  grunt.registerTask('default', []);

};