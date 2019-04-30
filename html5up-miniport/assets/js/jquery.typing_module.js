/**
   * Typing effect
   */
  $('.typing_module').each(function (index) {
	var self = $(this),
		    _wrapper = $('.typed', self)[0],
		    optData = eval('(' + self.attr('data-options') + ')'),
		    optDefault = {
		stringsElement: self.find('.typed-strings')[0],
		typeSpeed: 50,
		backSpeed: 500,
		fadeOut: true,
		loop: true
	},
		    options = $.extend(optDefault, optData);
	var typed = new Typed(_wrapper, options);
});
