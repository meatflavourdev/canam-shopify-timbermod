/*jslint node: true */

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: false,
                globals: {
                    jQuery: false
                },
            },
            with_overrides: {
                options: {
                    curly: true,
                    undef: true,
                },
                files: {
                    src: ['Gruntfile.js']
                },
            }
        },

        shopify: {
            options: {
                api_key: "aee9d455e473e9ab952eafbbc79cb475",
                password: "7eb10b160c34d65cf6cab14e2a159a2a",
                url: "canam-2.myshopify.com",
                base: 'deploy/'
            }
        },

        'shopify-theme': {
            target: {
                destination: 'deploy/',
                assets: {
                    // src assets from as many directories as you like, use blob (**) for
                    // recursive searching
                    src: ['src/assets/**'],
                    options: {
                        // by default common images, css, js or liquid files are allowed in the
                        // assets folder, you can allow additional extensions here
                        extensions: ['.eot', '.svg', '.ttf', '.map', '.woff', '.otf', '.woff2', '.ico']
                    }
                },
                config: {
                    // config only allows settings.html and settings_data.json, if you render
                    // your settings.html with Jade or Haml, no worries about the other files ...
                    // this example also demonstrates the method that should be used for
                    // ignoring a file which may be present in the precompiled theme, remember
                    // that this file will be pruned if it is present in the destination folder
                    src: ['src/config/*', 'src/config/settings_data.json']
                },
                layout: {
                    // the remaining three sources only allow liquid files
                    src: ['src/layout/*']
                },
                snippets: {
                    src: ['src/snippets/*']
                },
                templates: {
                    // use blog to search subdirectories and your directory structure can be as
                    // fancy as you wish
                    src: ['src/templates/*']
                },
                templatesCustomers: {
                    src: ['src/templates-customers/*']
                },
                dontPrune: [
                    // use dontPrune to specify an array of filenames that should not be pruned,
                    // you can't use * or ** here
                    'settings_data.json', 'config.yml', 'package.json', 'Gruntfile.js', 'node_modules/', '.update', 'en.default.json'
                ]
            }
        },


        clean: {
            'deploy-assets': ['deploy/assets/**'],
            'deploy': ['deploy/**']
        },

        copy: {
            deploy: {
                expand: true,
                cwd: 'src/',
                src: ['locales/*', 'config.yml'],
                dest: 'deploy/',
                filter: 'isFile'
            }
        },

        exec: {
            theme_watch: {
                command: 'cd deploy/ && theme watch --notify=.update'
            },
            serve_docs: {
                command: 'cd the_project_v.1.1/ && serve --no-logs'
            }
        },

        watch: {
            src: {
                files: ['src/**'],
                tasks: ['build', /*'log'*/ /*'watch:deploy'*/]
            },
            themekit: {
              files: ['deploy/.update'],
              tasks:[],
              options: {
                livereload: true
              }
            }
        },

        concurrent: {
            themewatch:{
                tasks:['watch:src', 'exec:theme_watch', 'watch:themekit'],
                options: {
                    logConcurrentOutput: true
                }
            },
            dev:{
                tasks:['watch:src', 'exec:theme_watch', 'exec:serve_docs', 'watch:themekit'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        changed: {
          options: {
            cache: '.cache/'
          }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shopify-theme');
    //grunt.loadNpmTasks('grunt-shopify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-changed');

    grunt.registerTask ('default', ['jshint', 'concurrent:themewatch']);
    grunt.registerTask ('dev', ['jshint', 'concurrent:dev']);

    grunt.registerTask ('build', ['changed:copy:deploy', 'shopify-theme']);
    grunt.registerTask ('rebuild', ['clean:deploy', 'copy:deploy', 'shopify-theme']);
    grunt.registerTask ('test', ['jshint']);

};
