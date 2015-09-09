Package.describe({
  name: 'dispatch:avatar',
  version: '1.0.1',
  summary: 'Simple avatar component'
});

Package.onUse(function (api) {
  api.use([
    //core
    'templating@1.1.1',
  ], 'web');

  api.addFiles([
    'avatar.html',
    'avatar.js'
  ], 'web');
});
