var elements = {
  avatarContainer: '.avatar',
  avatarImage: '.avatar-image',
};

var $container, view;

describe('Avatar', function () {
  beforeAll(function () {
    $container = $('#test-container');
  });

  afterEach(function () {
    view.destroy();
  });

  it('uses default image fallback when no avatar source or custom fallback are provided', function () {
    view = Template.avatar.constructView().attach($container[0]);

    expect($container).toContainElement(elements.avatarContainer);
    expect($container).toContainElement(elements.avatarImage);

    expect($(elements.avatarImage).attr('src')).toEqual('/packages/dispatch_avatar/images/default.jpg');
    expect($(elements.avatarContainer).hasClass('avatar--placeholder'));
  });

  it('uses custom fallback when no avatar source is provided', function () {
    view = Template.avatar.constructView().setData({ customImageFallback: 'http://cdn.urbanislandz.com/wp-content/uploads/2013/05/Kanye-West.jpeg'}).attach($container[0]);

    expect($container).toContainElement(elements.avatarContainer);
    expect($container).toContainElement(elements.avatarImage);

    expect($(elements.avatarImage).attr('src')).toEqual('http://cdn.urbanislandz.com/wp-content/uploads/2013/05/Kanye-West.jpeg');
  });

  it('uses avatar source when provided', function () {
    view = Template.avatar.constructView().setData({ src: 'https://i.ytimg.com/vi/HhfzlroQ1qU/hqdefault.jpg'}).attach($container[0]);

    expect($container).toContainElement(elements.avatarContainer);
    expect($container).toContainElement(elements.avatarImage);

    expect($(elements.avatarImage).attr('src')).toEqual('https://i.ytimg.com/vi/HhfzlroQ1qU/hqdefault.jpg');
  });
});
