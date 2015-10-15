module.exports = function (grunt) {
  
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    spa: {
      src: 'src',
      dist: 'dist',
      tmp: 'tmp',
      pub: '/var/www/SD.NodeJs/public_html/'
    }
  };

  grunt.initConfig({
    
    // Project settings
    yeoman: appConfig,

    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      options: {
        separator: ';'
      },
      spa: {
          src: 
            [
              '<%= yeoman.spa.src %>/*.js'
                         ],
          dest: '<%=yeoman.spa.dist%>/app.main.js'
      }
    },
    // ,
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },
    //   spa: {
    //       files: {
    //         '<%=yeoman.spa.dist%>/<%= pkg.name %>.min.js': ['<%= concat.spa.dest %>']
    //     }
    //   }
    // }
    qunit: {
      files: ['test/**/*.html']
    },
    copy: {
      spa: {
        files: [
          // includes files within path
          { expand: true, flatten: true, src: ['<%= yeoman.spa.dist %>/main.js'], dest: '<%= yeoman.spa.pub %>' },
      
          // includes files within path and its sub-directories
          { expand: true, flatten: true, src: ['src/index.html'], dest: '<%= yeoman.spa.pub %>' }
        ],
      }, 
      modules: {
        files: [
          // includes files within path
          { expand: true, flatten: true, src: ['<%= yeoman.spa.tmp %>/**/*.compiled.js'], dest: '<%= yeoman.spa.dist %>' },
        ],
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        esnext: true,
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
        options:{
          harmony: false, 
          es6module: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.spa.src %>',
            src: [ '**/*.jsx' ],
            dest: '<%= yeoman.spa.tmp %>',
            ext: '.js'
          }
        ]
      }
    }, 
    clean: ["tmp", "dist"],
    browserify: {

    options: {
        debug: true
      },
      dev: {
        src: '<%= yeoman.spa.dist %>/*.js',
        dest: '<%= yeoman.spa.dist %>/main.js'
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-babel');
  

  grunt.registerTask('test', ['jshint', 'qunit']);
  
  
  grunt.registerTask("concat-modules", "Concat modules to one module related file", function() {

  // read all subdirectories from your modules folder
  grunt.file.expand("tmp/modules/*").forEach(function (dir) {
    dir = dir.substr(dir.lastIndexOf('/')+1);
    console.log(dir);
    // get the current concat config
    var concat = grunt.config.get('concat') || {};
    var babel = grunt.config.get('babel') || {};

    // set the config for this modulename-directory
    concat[dir] = {
     src: ['tmp/modules/' + dir + '/*.js'],
     dest: 'tmp/modules/' + dir + '/' + dir + '.module.js'
    };
    
    babel[dir] = {
     src: ['tmp/modules/' + dir + '/*.js'],
     dest: 'tmp/modules/' + dir + '/' + dir + '.module.compiled.js'
    };
    
    
    // save the new concat configuration
    grunt.config.set('concat', concat);
    grunt.config.set('babel', babel);

  });
  // when finished run the concatinations
  grunt.task.run('concat');
  grunt.task.run('babel');
  
});

  //grunt.registerTask('build-spa', ['react','jshint', 'concat:spa', 'es6transpiler', 'transpile:commonjs', 'copy:spa']);
  grunt.registerTask('build-spa', ['clean', 'react', 'jshint', 'concat-modules', 'copy:modules', 'browserify']);
  grunt.registerTask('build', ['build-spa', 'copy:spa']);
  grunt.registerTask('default', []);

};