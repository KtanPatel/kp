const fn = require("fn-str");

console.log('Capitalize', fn.Capitalize("hello-world"))  // Capitalize HelloWorld
console.log('Capitalize', fn.Capitalize("hello_world", "_", " "))  // Capitalize Hello World