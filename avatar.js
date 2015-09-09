Template.avatar.helpers({
  spinnerClass: function () {
    return this.size <= 100 ? 'spinner--small' : '';
  },
  src: function () {
    // If src override exists, use it.
    if (this.src) return this.src;

    // Otherwise generate src URL based on user object.
    if (!this.user) return;

    return Avatar.imageUrl(this.user, this.size || 100);
  }
});
