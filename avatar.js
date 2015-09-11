var defaultImageFallback = '/packages/dispatch_avatar/images/default.jpg';

Template.avatar.helpers({
  defaultImageFallback: function () {
    return defaultImageFallback;
  },
  spinnerClass: function () {
    return this.size <= 100 ? 'spinner--small' : '';
  },
  src: function () {
    if (this.src) return this.src;
    return this.customImageFallback || defaultImageFallback;
  }
});
