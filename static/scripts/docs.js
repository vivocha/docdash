(function() {

	function hasClass (el, className){
	  return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
	}

	var body = document.body
	  , html = document.documentElement
		, elGoTop = document.getElementById('go-to-top')
		, headerBar = document.getElementById('vvc-header-bar')
		, navLogo = document.getElementById('nav-header')
		, navSpacer = document.getElementById('nav-spacer')

	elGoTop.addEventListener('click', function(){
		window.scroll(0,0);
	});

	window.addEventListener('scroll', function(e) {
		var w = window.innerWidth;
		if(window.scrollY > window.innerHeight/2) {
			headerBar.classList.remove('hide');
			if(w < 320 || w > 680) {
				navLogo.classList.add('hide');
				navSpacer.classList.add('margin-top-50');
			}
		} else {
			headerBar.classList.add('hide');
			if(w < 320 || w > 680) {
				navLogo.classList.remove('hide');
				navSpacer.classList.remove('margin-top-50');
			}
		}
	});


})();