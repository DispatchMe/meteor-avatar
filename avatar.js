const defaultImageFallback = '/packages/dispatch_avatar/images/default.svg';

Template.avatar.helpers({
  isPlaceholder: () => !Template.currentData().src,
  spinnerClass: () => Template.currentData().size <= 100 ? 'spinner--small' : '',
  src: function () {
    if (this.src) return this.src;
    return this.customImageFallback || defaultImageFallback;
  }
});
