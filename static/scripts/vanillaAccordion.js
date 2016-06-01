/*
		Simple accordion in Vanilla Javascript
		inspired by: http://codepen.io/jamespr/pen/yyxXNP
*/
(function() {
	var el = document.getElementById("vvc-sidenav")
		, hook = el.getElementsByClassName("vvc-accordion-trigger");
	for (var i = 0; i < hook.length; i++) {
		hook[i].addEventListener("click", toggle);
	}
	function toggle(e) {
		e.preventDefault();
	  if (this.nextElementSibling.nodeType === 1 && hasClass(this.nextElementSibling,"hide")) { 
	    if (this.nextElementSibling.classList) {
	      this.nextElementSibling.classList.remove('hide');
	    } else {
	      this.nextElementSibling.className = this.nextElementSibling.className.replace(new RegExp('(^|\\b)' + "hide" + '(\\b|$)', 'gi'), ' ');
	    }
	  }
	  else {    
	    this.nextElementSibling.className += " " + "hide";
	  }      
	}
	function hasClass (el, className){
	  return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
	}
})();