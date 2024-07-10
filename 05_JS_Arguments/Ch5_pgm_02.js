// Breaking a function by changing a variable name

var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(msg);
};

showMessage();

var message1 = "universe ";
console.log(msg);
console.log(message1);
var combinedMsg = msg + " " + message1;
console.log(combinedMsg);
/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */