/*░░    ░░░  ░░░░░  ░░░░░░░ ░░░░░░░░ ░░░░░░░ ░░░░░░   100621 EH ░░░░░░░
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
//document.getElementById("main");
		document.querySelector("#main>section").classList.remove("active");
    if(location.hash == ""){
      location.hash = "home"
    }
		document.querySelector(location.hash).classList.add("active");
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
 ** dom ready is an event that fires when the page is 'ready', after self-calling functions and before the loaded event. **
**/
function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction(event)
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}
ready(event => {
  /**
	 ** save new time stamp
	 **/
	docReadyTime = new Date().getTime();
	console.log("event: document is ready, "+(docReadyTime - initTime)+" milisec since init.");

})

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
	console.log("event: window is loaded, "+(onloadTime - initTime)+" milisec since init.");

};
