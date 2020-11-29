module.exports = function (grunt) { // Inyección de dependencias
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './' // Directorio base para el servidor
                    }
                }
            }
        }, 
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './', //busca
                    src: 'images/*.{png,gif,jpg,jpeg}', //compime
                    dest: 'dist/' // distribuye
                }]
            }
        }, 
        copy: {
            html: {
                    files: [{
                    expand: true,
                    dot: true, //busca
                    cwd: './',
                    src: ['*.html'], //compime
                    dest: 'dist/' // distribuye
                }]
            },
            fonts: {
                files: [{
                    // for font-iconic
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/open-iconic/font',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },
        clean: {
            build: {
                src:['dist/']
            }
        },
        cssmin: {
            dist:{}
        },
        uglify: {
            dist:{}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css'
                    ]
                }]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },
        useminPrepare: {
            foo: {
                dest: 'dist',
                src:['index.html', 'cataloge.html', 'child.html', 'contact.html', 'designers.html', 'men.html', 'women.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0,
                                    rebase: false
                                }
                            }
                        }]
                    }
                }
            }
        },
        usemin: {
            html: ['dist/index.html', 'dist/cataloge.html', 'dist/child.html', 'dist/contact.html', 'dist/designers.html', 'dist/men.html', 'dist/women.html'],
            options: {
                assetsDir: ['dist', 'dist/css', 'dist/js']
            }
        }
    }); // Configura Flujo de trabajo
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('img:compress', ['imagemin']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ]) // version final para producción
}