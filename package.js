Package.describe({
  name: 'dispatch:avatar',
  version: '1.0.1',
  summary: 'Simple avatar component',
  git: 'https://github.com/DispatchMe/meteor-avatar.git',
});

Package.onUse(function (api) {
  api.use([
    //core
    'templating@1.1.1',

    // atmosphere
    'dispatch:spinner@0.0.3',
    'flemay:less-autoprefixer',
    'raix:handlebar-helpers'
  ], 'web');

  api.addFiles([
    'avatar.html',
    'avatar.js',

    'styles/avatar.less',
    'styles/badge.import.less',
    'styles/variables.import.less'
  ], 'web');

    api.addFiles([
    'images/default.jpg',
  ], 'web', {isAsset: true});
});
