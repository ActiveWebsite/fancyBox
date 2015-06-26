module.exports = function (grunt) {
	'use strict';

	require('jit-grunt')(grunt)();

	grunt.util.linefeed = '\n';

	// Project configuration
	grunt.initConfig({

		uglify: {
			main: {
				src: ['source/jquery.fancybox.js'],
				dest: 'source/jquery.fancybox.min.js'
			},
			buttons: {
				src: ['source/helpers/jquery.fancybox-buttons.js'],
				dest: 'source/helpers/jquery.fancybox-buttons.min.js'
			},
			media: {
				src: ['source/helpers/jquery.fancybox-media.js'],
				dest: 'source/helpers/jquery.fancybox-media.min.js'
			},
			thumbs: {
				src: ['source/helpers/jquery.fancybox-thumbs.js'],
				dest: 'source/helpers/jquery.fancybox-thumbs.min.js'
			}
		},

		less: {
			main: {
				files: {
					'source/jquery.fancybox.css': 'source/less/fancybox.less'
				}
			},
			helpers: {
				files: {
					'source/helpers/jquery.fancybox-buttons.css': 'source/less/helpers/buttons.less',
					'source/helpers/jquery.fancybox-thumbs.css': 'source/less/helpers/thumbs.less'
				}
			}
		},

        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false
            },
            main: {
            	files: {
            		'source/jquery.fancybox.min.css': 'source/jquery.fancybox.css'
            	}
            },
            helpers: {
            	files: {
					'source/helpers/jquery.fancybox-buttons.min.css': 'source/helpers/jquery.fancybox-buttons.css',
					'source/helpers/jquery.fancybox-thumbs.min.css': 'source/helpers/jquery.fancybox-thumbs.css'
            	}
            }
        }

	});

	// Register tasks
	grunt.registerTask('default', ['less', 'uglify', 'cssmin']);
};