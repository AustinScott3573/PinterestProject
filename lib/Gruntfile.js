module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../styles/style.css': '../sass/style.scss'
        }
      }
    },
    watch: {
      app: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
    sassy: {
      files:['../sass/**/*.scss'],
      tasks: ['sass']
    }  
  }
});

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass','watch']);
};
