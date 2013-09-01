module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    kernelFiles: [
                'bower_components/requirejs/require.js',
                'src/config.js',
                'src/services.js',
                'src/kernel.js'],

    concat: {
        kernel: {
            src: '<%= kernelFiles %>',
            dest: 'index.js'
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

  // Default task(s).
  grunt.registerTask('release:dev', ['concat:kernel']);
  grunt.registerTask('release:production', ['']);

  grunt.registerTask('default', ['release:dev', 'concurrent']);

};
