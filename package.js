var packageName = 'brandly:angular-youtube-embed';
var where = 'client';
var version = '1.1.1';

var summary = 'Embed a YouTube player with a simple directive';

var gitLink = 'https://brandly.github.io/angular-youtube-embed/';

var documentationFile = 'README.md';

Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

    api.use('angular:angular@1.2.0', where);

    api.addFiles('src/angular-youtube-embed.js')
});
