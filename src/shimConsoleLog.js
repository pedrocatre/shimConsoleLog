// If console does not exist in the browser, create it
// If console.log does not exist in the browser, create it
// Read more about it here http://stackoverflow.com/a/7425095/3094399
if (!window.console) {var console = {};}
if (!window.console.log) {console.log = function() {};}
