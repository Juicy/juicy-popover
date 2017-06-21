module.exports = function (grunt) {
    grunt.initConfig({
        bump: {
            options: {
                files: ['bower.json', 'src/juicy-popover.html'],
                commit: true,
                commitMessage: '%VERSION%',
                commitFiles: ['bower.json', 'src/juicy-popover.html'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        }
    });
    grunt.loadNpmTasks('grunt-bump');
};
