Package.describe({
  name: 'dispatch:avatar',
  version: '1.0.0',
  summary: 'Simple avatar component',
  git: 'https://github.com/DispatchMe/meteor-avatar.git',
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    // core
    'ecmascript',
    'templating',

    // atmosphere
    'dispatch:spinner',
    'flemay:less-autoprefixer',
  ], 'web');

  api.addFiles([
    'avatar.html',
    'avatar.js',

    'styles/avatar.less',
    'styles/badge.import.less',
    'styles/variables.import.less'
  ], 'web');

    api.addFiles([
    'images/default.svg',
  ], 'web', {isAsset: true});
});

Package.onTest(function (api) {
  api.use('sanjo:jasmine@0.18.0');

  api.use([
    // core
    'ecmascript',
    'jquery',
    'templating',

    // atmosphere
    'dispatch:view-extensions',

    // package
    'dispatch:avatar'
  ], 'web');

  api.addFiles([
    'tests/prepare.html',
    'tests/avatar.js'
  ], 'web');
});
