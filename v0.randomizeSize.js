var randomizeSize = function(selector, r, mR) {
  $(selector).each(function(){

    $(this).show();

    var radius = Math.ceil(Math.random() * r);
    //var height = Math.ceil(Math.random() * h);
    //var width = Math.ceil(Math.random() * w);

    $(this).css({
      'height': radius,
      'width': radius,
      'max-height': mR,
      'max-width': mR
    });

  });
};
