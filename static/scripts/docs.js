(function(){

	function hasClass (el, className){
	  return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
	}

		// experimenting ajax page load
		// requires jquery

		/*
		var sideNav = document.getElementById('vvc-sidenav')
			, sidenavLinks = sideNav.getElementsByTagName('a')
			, main = document.getElementById('main')
			, $main = $('#main')

		for(var i = 0; i < sidenavLinks.length; i++) {
			sidenavLinks[i].addEventListener('click', onSidenavLinkClick);
		}

		function onSidenavLinkClick(e) {
			e.preventDefault();
			var href = e.srcElement.getAttribute('href');
			
			$main.empty();
			$main.load(href, function(data) {
			  console.log('LOADED', data);
			});
		}
		*/




	/*****************************/
	var body = document.body
	  , html = document.documentElement
		, elGoTop = document.getElementById('go-to-top')
		, headerBar = document.getElementById('vvc-header-bar')

	elGoTop.addEventListener('click', function(){
		window.scroll(0,0);
	})

	window.addEventListener('scroll', function(e) {
		if(window.scrollY > window.innerHeight) {
			headerBar.classList.remove('hide');
		} else {
			headerBar.classList.add('hide');
		}
	});


})();