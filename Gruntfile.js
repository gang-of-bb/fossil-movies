module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    folders: {
      'public': '.',
      'css': '<%= folders.public %>/css',
      'sass': 'sass'
    },

    // sass files to compile
    sassFiles: [{
          expand: true,               // to define a directory
          cwd: '<%= folders.sass %>', // source folder
          src: ['*.scss'],            // source extension
          dest: '<%= folders.css %>', // destination folder
          ext: '.css'                 // destination extension
        }],

    // kernel files to concat
    kernelFiles: [
                'bower_components/requirejs/require.js',
                'src/config.js',
                'src/services.js',
                'src/kernel.js'],

    concat: {
        kernel: {
            src: '<%= kernelFiles %>',
            dest: '<%= folders.public %>/index.js'
        }
    },

    sass: {
      options: {
        require: [
          "bourbon"
        ],
        bundleExec: true
      },
      // linter for sass files.
      lint: {
        options: {
          check: true
        },
        files: '<%= sassFiles %>'
      },
      // compile for development environment
      dev: {
        options: {
          style: 'expanded'
        },
        files: '<%= sassFiles %>'
      },
      // compile for release.
      release: {
        options: {
          style: 'compressed'
        },
        files: '<%= sassFiles %>'
      }
    },

    connect: {
      server: {
        options: {
          base: '.',
          port: 1337,
          hostname: '*'
        }
      }
    },

    watch: {
        kernel: {
            files: '<%= kernelFiles %>',
            tasks: ['concat:kernel']
        },
        sass: {
            files: '<%= folders.sass %>/**/*.scss',
            tasks: ['sass:dev']
        }
    },
    concurrent: {
        dev: {
            tasks: ['watch', 'connect:server:keepalive'],
            options: {
                logConcurrentOutput: true
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // helpers tasks.
  grunt.registerTask('test', ['sass:lint']);
  grunt.registerTask('build:dev', ['concat:kernel', 'sass:dev']);
  grunt.registerTask('build:release', ['sass:release']);

  // tasks to launch
  grunt.registerTask('dev', ['build:dev', 'concurrent']);
  grunt.registerTask('release', ['test', 'build:release']);

  // Default task(s).
  grunt.registerTask('default', ['dev']);

};
