module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('bower.json'),
		uglify: {
			options: {
				banner: '/* (c) 2015 */ \n'
			},
			dist: {
				src: 'src/shimConsoleLog.js',
				dest: 'dist/shimConsoleLog.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
}
