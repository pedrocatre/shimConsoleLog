# shimConsoleLog

Browser console shim so that legacy JavaScript engines don't fail if you use console.log.

## Install

bower install shimConsoleLog --save

## Motivation

If you use console.log in you web page and you open it on IE 9 the app will fail. If you try to find out
why by opening the IE debugger the app won't fail but you won't know the reason. IE9 defines the console.log
only when it's debugger is open. Otherwise it does not have it and it will fail.

This shim allows you to have the console.log in your code and not break the app in JavaScript engines that don't support it.

## License

The code in this repository can be used under the MIT License.
