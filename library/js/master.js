/**
 ** BROWSER PAGE EVENT CHAIN **
 **
 ** firstOrderOfBSNS is a self-calling function that fires before document ready **
**/
var firstOrderOfBSNS = (function(){

	console.log("Javascript initiated: firstOrderOfBSNS();");
		
	/**
	 ** Initializes app
	 **/
	function initialize() {
		window.addEventListener('hashchange', onWindowHashChange, false);
		
		setActiveState();
	}
	
	/**
	 ** Event handling of window URL's 'hashchange'
	 **/
	function onWindowHashChange( event ) {
		setActiveState();
	}


	/**
	 ** Reads the current #hash in the URL and sets active class
	 **/
	function setActiveState() {
		$("#main>section").removeClass("active");
		$(location.hash).addClass("active");
	}


	/**
	 ** Initialize the app logic, second to last step before returning 
	 **/
	initialize();

	return {
		
	};
})();

/**
 ** BROWSER PAGE EVENT CHAIN **
 **
 ** jQuery(document).ready is an event that fires when the page is 'ready', after self-calling functions and before the browser window's load event. **
**/
jQuery(document).ready(function() {
	
	console.log("jQuery event: document ready!");
	
});

/**
 ** BROWSER PAGE EVENT CHAIN **
 **
 ** window.onload is an event that fires when the page is completely loaded, after the jQuery(document).ready event. **
**/
window.onload = function() {

	console.log("Browser window event: loaded!");
	//alert("Hello Internet");
	
};