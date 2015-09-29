module.exports = function(grunt) {
  
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        dist: 'dist/spa/*',
        pub: '/var/www/SD.NodeJs/public_html/'
    };

  grunt.initConfig({
    
    // Project settings
    yeoman: appConfig,
        
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/client/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    copy: {
      main: {
          files: [
            // includes files within path
            {expand: true, flatten:true, src: ['<%= yeoman.dist %>'], dest: '<%= yeoman.pub %>' },
      
            // includes files within path and its sub-directories
            {expand: true, flatten:true, src: ['src/client/index.html'], dest: '<%= yeoman.pub %>' }
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

  grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'copy']);
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);

};