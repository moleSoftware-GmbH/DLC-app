module.exports = function(grunt) {


  //Maybe use auto ftp upload ? syncJS
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  //grunt.loadNpmTasks('sassdown');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                      server: {
                      baseDir: "./"
                      }
                }
            }
        },
    sass: {
      options: {
      outputStyle: 'compressed',
      debugInfo: true,
      sourceMap: true
      },
      build: {
          files: [{
              expand: true,
              src: '**/*.scss',
              dest: 'css/',
              cwd: 'scss',//Directory were your scss files are
              ext: '.css'
          }]
      }
    },
    notify: {
    sass:{
        options:{
            title: "CSS Files built",
            message: "SASS task complete"
        }
    }
    },
    watch: {
      css: {
    files: ['**/*.scss'],
    tasks: ['sass','notify:sass']
    },
    options: {
      interrupt: true
    }
  },
  });



  // Default task(s).
  grunt.registerTask('default', ['browserSync','watch']);
};



