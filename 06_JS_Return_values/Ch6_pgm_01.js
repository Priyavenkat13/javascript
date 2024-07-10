// Returning a value from a function

var getMessage;
var getMyMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

getMyMessage = function () {
    return "This is my custom message!";
};

response = getMessage();
console.log(response); // This will print "I’m going on an adventure!"

response = getMyMessage();
console.log(response); // This will print "This is my custom message!"



/* Further Adventures
 *
 * 1) Write a getMyMessage function
 *    that returns a message of
 *    your choosing.
 *
 * We can call functions at the console prompt.
 * Run the program, then click in the Console panel
 * and enter commands after the prompt, >
 *
 * 2) Call getMessage at the prompt.
 *    
 *    > getMessage()
 *
 * When a function is called at the prompt,
 * its return value is displayed.
 *
 * 3) Call getMyMessage at the prompt.
 *
 */