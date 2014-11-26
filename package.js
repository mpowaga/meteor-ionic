Package.describe({
  name: 'mpowaga:ionic',
  summary: 'Ionic framework for Blaze',
  version: '0.1.0',
  git: 'https://github.com/mpowaga/meteor-ionic'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.versionsFrom('1.0');

  api.use([
    'fourseven:scss@1.0.0'
  ], 'server');

  api.use([
    'templating'
  ], both);

  api.imply('fourseven:scss', ['server']);

  api.addFiles([
    'client/templates/ionHeader.html',
    'client/templates/ionFooter.html',
    'client/templates/ionHeader.js',
    'client/templates/ionFooter.js'
  ], 'client');

  api.addFiles([
    '_ionic.scss',
    'assets/scss/_animations.scss',
    'assets/scss/_checkbox.scss',
    'assets/scss/_action-sheet.scss',
    'assets/scss/_slide-box.scss',
    'assets/scss/_tabs.scss',
    'assets/scss/_items.scss',
    'assets/scss/_popover.scss',
    'assets/scss/_platform.scss',
    'assets/scss/_loading.scss',
    'assets/scss/_radio.scss',
    'assets/scss/_modal.scss',
    'assets/scss/_toggle.scss',
    'assets/scss/_mixins.scss',
    'assets/scss/_select.scss',
    'assets/scss/_range.scss',
    'assets/scss/_variables.scss',
    'assets/scss/_transitions.scss',
    'assets/scss/_reset.scss',
    'assets/scss/_button-bar.scss',
    'assets/scss/_type.scss',
    'assets/scss/_button.scss',
    'assets/scss/_progress.scss',
    'assets/scss/_scaffolding.scss',
    'assets/scss/_badge.scss',
    'assets/scss/_form.scss',
    'assets/scss/_util.scss',
    'assets/scss/_bar.scss',
    'assets/scss/_menu.scss',
    'assets/scss/_list.scss',
    'assets/scss/_backdrop.scss',
    'assets/scss/_grid.scss',
    'assets/scss/_popup.scss',
    'assets/scss/ionicons/_ionicons-font.scss',
    'assets/scss/ionicons/_ionicons-animation.scss',
    'assets/scss/ionicons/_ionicons-icons.scss',
    'assets/scss/ionicons/_ionicons-variables.scss',
    'assets/scss/ionicons/ionicons.scss'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mpowaga:ionic');
  api.addFiles('mpowaga:ionic-tests.js');
});
