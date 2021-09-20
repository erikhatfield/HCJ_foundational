/*░░    ░░░  ░░░░░  ░░░░░░░ ░░░░░░░░ ░░░░░░░ ░░░░░░   092021 EH ░░░░░░░
▒▒▒▒▒  ▒▒▒▒ ▒▒   ▒▒ ▒▒         ▒▒    ▒▒      ▒▒   ▒▒         ▒▒ ▒▒
▒▒▒ ▒▒▒▒ ▒▒ ▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒    ▒▒    ▒▒▒▒▒   ▒▒▒▒▒▒          ▒▒ ▒▒▒▒▒▒▒
▓▓▓  ▓▓  ▓▓ ▓▓   ▓▓      ▓▓    ▓▓    ▓▓      ▓▓   ▓▓    ▓▓   ▓▓      ▓▓
███      ██ ██   ██ ███████    ██    ███████ ██   ██ ██  █████  ██████*/
var initTime, docReadyTime, onloadTime;
/**
 ** BROWSER PAGE EVENT CHAIN [part 1]**
 **
 ** firstOrderOfBSNS is a self-calling function that fires before document ready (event) **
**/
var firstOrderOfBSNS = (function(){

	/**
	 ** save initial time stamp
	 ** getTime() returns the number of milliseconds since 010170
	 **/
	initTime = new Date().getTime();
	console.log("Clock started: firstOrderOfBSNS();");
		
	/**
	 ** Initializes app logic
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
 ** BROWSER PAGE EVENT CHAIN [part 2]**
 **
 ** jQuery(document).ready is an event that fires when the page is 'ready', after self-calling functions and before the browser window's load event. **
**/
jQuery(document).ready(function() {
	/**
	 ** save new time stamp
	 **/
	docReadyTime = new Date().getTime();
	console.log("jQuery event: document is ready, "+(docReadyTime - initTime)+" milisec since init.");

	//alert("Hello Internet");
});

/**
 ** BROWSER PAGE EVENT CHAIN [part 3]**
 **
 ** window.onload is an event that fires when the page is completely loaded, after the jQuery(document).ready event. **
**/
window.onload = function() {

	/**
	 ** save onload time stamp
	 **/
	onloadTime = new Date().getTime();
	console.log("Browser event: window is loaded, "+(onloadTime - initTime)+" milisec since init.");
	
};
