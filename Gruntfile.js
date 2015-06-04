module.exports = function (grunt) {
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		// SASS TASK
		sass: {
			dist: {
				files: {
					'style.css' : 'sass/style.scss'
				}
			}
		},
		
		// WATCH TASK
		watch: {
            options: {
                livereload: true
            },
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);

};